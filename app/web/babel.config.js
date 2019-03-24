module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["next/babel"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": "./",
            "@comp": "./components/",
            "@common": "../common/"
          }
        }
      ]
    ]
  };
};
