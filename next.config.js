/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      cssProp: true,
      minify: true,
      transpileTemplateLiterals: true,
      pure: true,
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djftrby1k8irl.cloudfront.net',
        port: '',
        pathname: '/s3fs-public/**',
      },
    ],
  },
  env:{
    URL_BACK: 'http://localhost:3000'
  }
}

module.exports = nextConfig
