/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // The double asterisk acts as a universal wildcard for all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // Allows all HTTP domains just in case the API sends an insecure link
      },
    ],
  },
};

export default nextConfig;