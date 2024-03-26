/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sub-brand",
        destination: "/sub-brand/numthai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;