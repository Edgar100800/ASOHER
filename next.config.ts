import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // GitHub Pages no tiene servidor de imágenes; las fotos ya se optimizan a WebP en src/assets/photos.
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/ASOHER" : "",
};

export default nextConfig;
