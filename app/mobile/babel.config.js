module.exports = function configureBabel(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": "./",
            "@common": "../common/"
          }
        }
      ]
    ]
  };
};
