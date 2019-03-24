const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // config.module.rules.push({
      //   test: /\.js/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     // eslint options (if necessary)
      //   }
      // });
    }
    return config;
  }
});
