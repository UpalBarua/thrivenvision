"use client";

import { InstagramEmbed } from "react-social-media-embed";

export function PortfolioPost({ url }: { url: string }) {
  return <InstagramEmbed url={url} />;
}
