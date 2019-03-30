module.exports = function (api) {
  api.cache(true);

  return {
    "plugins": [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-class-properties"
    ],
    "presets": [
      [
        "@babel/preset-env", {
          "modules": "commonjs",
          "targets": {
            "browsers": [
              "last 2 versions",
              "IE >= 10"
            ]
          },
          "useBuiltIns": "usage",
          "corejs": 2,
          "debug": false
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
  };
}
