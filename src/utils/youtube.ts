const PLACEHOLDER_THUMBNAIL = "/images/youtube-placeholder.jpg";
const YOUTUBE_EMBED_BASE = "https://www.youtube.com/embed/";
const VALID_ID_PATTERN = /^[\\w-]{11}$/;
const KNOWN_PREFIXES = ["www.", "m.", "music.", "gaming."];
const YOUTUBE_THUMB_BASE = "https://i3.ytimg.com/vi/";
const DEFAULT_THUMBNAIL = "hqdefault.jpg";

function normalizeHost(host: string): string {
  for (const prefix of KNOWN_PREFIXES) {
    if (host.startsWith(prefix)) {
      return host.slice(prefix.length);
    }
  }
  return host;
}

function sanitizeVideoId(id: string | null): string | null {
  if (!id) return null;
  return VALID_ID_PATTERN.test(id) ? id : null;
}

export function extractYoutubeVideoId(rawUrl: string): string | null {
  if (!rawUrl) return null;

  try {
    const url = new URL(rawUrl);
    const host = normalizeHost(url.hostname);

    if (host === "youtu.be") {
      return sanitizeVideoId(url.pathname.split("/").filter(Boolean)[0] ?? null);
    }

    if (host.endsWith("youtube.com")) {
      const paramsId = sanitizeVideoId(url.searchParams.get("v"));
      if (paramsId) return paramsId;

      const segments = url.pathname.split("/").filter(Boolean);
      if (!segments.length) return null;

      if (
        segments[0] === "embed" ||
        segments[0] === "shorts" ||
        segments[0] === "live"
      ) {
        return sanitizeVideoId(segments[1] ?? null);
      }

      return sanitizeVideoId(segments[segments.length - 1] ?? null);
    }
  } catch {
    return null;
  }

  return null;
}

export function getYoutubeEmbedUrl(rawUrl: string): string | null {
  const id = extractYoutubeVideoId(rawUrl);
  return id ? `${YOUTUBE_EMBED_BASE}${id}?autoplay=1` : null;
}

export function getYoutubeThumbnailSync(rawUrl: string): string {
  const id = extractYoutubeVideoId(rawUrl);
  if (!id) return PLACEHOLDER_THUMBNAIL;
  return `${YOUTUBE_THUMB_BASE}${id}/${DEFAULT_THUMBNAIL}`;
}
