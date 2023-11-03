/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/controledecompras',
        destination: 'https://gerenciador-de-compras.vercel.app/',
      },
    ]
  },
}

module.exports = nextConfig
