require("dotenv").config();

const path = require("path");
const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const { exportPathMap } = require("nextjs-export-path-map");
const Dotenv = require("dotenv-webpack");

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ];
      return config;
    },
    cssModules: true,
    exportPathMap: exportPathMap.bind(null, path.join(__dirname, "pages"))
  })
);
