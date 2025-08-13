import { useEffect } from "react";

interface TikTokEmbedProps {
  videoId: string;
  cite: string;
  username: string;
  description: string;
  tags: string[];
  musicTitle?: string;
  musicHref?: string;
}

export default function TikTokEmbed({
  videoId,
  cite,
  username,
  description,
  tags,
  musicTitle,
  musicHref,
}: TikTokEmbedProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if ((window as any).tiktokEmbed?.lib?.render) {
        (window as any).tiktokEmbed.lib.render();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tagsHtml = tags
    .map(
      (tag) =>
        `<a title="${tag.toLowerCase()}" target="_blank" href="https://www.tiktok.com/tag/${tag.toLowerCase()}?refer=embed">#${tag}</a>`
    )
    .join(" ");

  const musicHtml = musicTitle && musicHref
    ? `<a target="_blank" title="♬ ${musicTitle}" href="${musicHref}">♬ ${musicTitle}</a>`
    : "";

  const embedHtml = `
    <blockquote class="tiktok-embed" cite="${cite}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
      <section>
        <a target="_blank" title="${username}" href="https://www.tiktok.com/${username}?refer=embed">${username}</a>
        ${description}
        ${tagsHtml}
        ${musicHtml}
      </section>
    </blockquote>
    <script async src="https://www.tiktok.com/embed.js"></script>
  `;

  return (
    <div
      className="tiktok-embed-container"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
