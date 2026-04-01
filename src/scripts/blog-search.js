import Fuse from "fuse.js";

const SPINNER = `<div style="grid-column:1/-1;display:flex;justify-content:center;padding:2rem 0;">
  <svg style="width:2.5rem;height:2.5rem;color:var(--color-primary);animation:spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path opacity="0.75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"></path>
  </svg>
</div>`;

let searchData = null;
let fuse = null;

const fuseConfig = {
  keys: ["title", "description", "tags", "categories", "content"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.45,
};

const ensureSearchData = async (searchResults) => {
  if (searchData && fuse) return;

  searchResults.innerHTML = SPINNER;
  const response = await fetch("/search.json", { cache: "force-cache" });
  if (!response.ok) {
    throw new Error("Nu am putut încărca indexul de căutare.");
  }

  searchData = await response.json();
  fuse = new Fuse(searchData, fuseConfig);
  searchResults.innerHTML = "";
};

const createResultCard = (post) => {
  const article = document.createElement("article");
  article.className = "search-result-card";

  const imageHtml = post.image
    ? `<div class="search-result-card__image-wrap"><img src="${post.image}" alt="${post.title}" class="search-result-card__image" loading="lazy" /></div>`
    : "";

  const tagsHtml = (post.tags || [])
    .slice(0, 3)
    .map(
      (tag) => `<span class="search-result-card__tag">#${tag}</span>`,
    )
    .join("");

  article.innerHTML = `
    <a href="/blog/${post.slug}/" class="search-result-card__link">
      ${imageHtml}
      <div class="search-result-card__body">
        <div class="search-result-card__meta">
          <span>${post.date || ""}</span>
          <span>${(post.categories || []).join(", ")}</span>
        </div>
        <h3>${post.title}</h3>
        ${post.description ? `<p>${post.description}</p>` : ""}
        ${tagsHtml ? `<div class="search-result-card__tags">${tagsHtml}</div>` : ""}
      </div>
    </a>
  `;

  return article;
};

const displayResults = (results, query, searchResults, noResults, searchInfo) => {
  searchResults.innerHTML = "";

  if (!results.length) {
    searchResults.classList.add("hidden");
    noResults.classList.remove("hidden");
    searchInfo.textContent = `Nu am găsit rezultate pentru "${query}".`;
    return;
  }

  searchResults.classList.remove("hidden");
  noResults.classList.add("hidden");
  searchInfo.textContent = `Am găsit ${results.length} rezultate pentru "${query}".`;

  results.forEach(({ item }) => {
    searchResults.appendChild(createResultCard(item));
  });
};

const performSearch = async (query, searchResults, noResults, searchInfo) => {
  const trimmed = query.trim();

  if (!trimmed) {
    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");
    noResults.classList.add("hidden");
    searchInfo.textContent = "";
    return;
  }

  await ensureSearchData(searchResults);
  if (!fuse) return;

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("q", trimmed);
  window.history.replaceState(null, "", `${window.location.pathname}?${searchParams.toString()}`);

  displayResults(fuse.search(trimmed), trimmed, searchResults, noResults, searchInfo);
};

const initSearch = () => {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const noResults = document.getElementById("no-results");
  const searchInfo = document.getElementById("search-info");

  if (
    !(searchInput instanceof HTMLInputElement) ||
    !(searchResults instanceof HTMLElement) ||
    !(noResults instanceof HTMLElement) ||
    !(searchInfo instanceof HTMLElement)
  ) {
    return;
  }

  if (searchInput.dataset.searchInitialized === "true") return;
  searchInput.dataset.searchInitialized = "true";

  let debounceTimer;

  searchInput.addEventListener("input", (event) => {
    const target = event.target;
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => {
      void performSearch(target.value, searchResults, noResults, searchInfo);
    }, 250);
  });

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  if (query) {
    searchInput.value = query;
    void performSearch(query, searchResults, noResults, searchInfo);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSearch, { once: true });
} else {
  initSearch();
}

document.addEventListener("astro:page-load", initSearch);
document.addEventListener("astro:after-swap", initSearch);
