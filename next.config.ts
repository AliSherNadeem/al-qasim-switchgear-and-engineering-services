import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows a "?v=" cache-busting query string on the logo so browsers
    // can't serve a stale cached copy after the file is replaced.
    localPatterns: [
      {
        pathname: "/logo.png",
      },
      {
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
