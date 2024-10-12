/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/files',
            publicPath: '/_next/static/files',
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
