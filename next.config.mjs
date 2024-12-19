/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "twdmyicnpuzaebtiuwqb.supabase.co",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
