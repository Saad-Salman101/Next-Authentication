/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb+srv://saadsalman98:s34616615@cluster0.muc23g4.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "codingwithabbas",
  },
};

module.exports = nextConfig;
