import { b as bundleConfig$1, _ as _Container, E as Environment, A as ASSETS_DIR, f as filterNil, a as fromPublic } from "./tasks.js";
const bundleConfig = bundleConfig$1.extend(() => {
  _Container.get(Environment);
  return {
    aliases: [
      {
        from: "react-native-is-edge-to-edge",
        to: "react-native-is-edge-to-edge/dist/index.mjs"
      },
      // {
      //   from: /^inline-style-prefixer\/lib\/(.*)/,
      //   to: 'inline-style-prefixer/es/$1.js',
      // },
      {
        from: "inline-style-prefixer/lib",
        to: "inline-style-prefixer/es"
      },
      {
        from: "css-in-js-utils/lib",
        to: "css-in-js-utils/es"
      }
    ],
    // externals: [
    //   'json-stringify-safe',
    //   'normalize-css-color',
    //   'pino',
    //   'postcss-value-parser',
    //   'raf/polyfill.js',
    //   'react-dom',
    //   'react',
    //   'react-fast-compare',
    //   'react-redux',
    //   'react/jsx-runtime',
    //   'setimmediate',
    //   'styleq',
    //   'void-elements',
    //   /lodash/,
    // ],
    assetsDir: ASSETS_DIR,
    babel: {
      plugins: filterNil([
        ["transform-react-remove-prop-types", { removeImport: true }],
        [
          "react-remove-properties",
          { properties: ["testID"] }
        ]
        // 'react-native-reanimated/plugin',
      ]),
      presets: [
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-flow",
        "@babel/preset-typescript"
      ]
    },
    dedupe: ["react"],
    define: {
      __DEV__: `${false}`
    },
    envPrefix: ["APP_", "SERVER_APP_"],
    externals: ["firebase"],
    publicPathname: fromPublic(),
    transpileModules: filterNil([
      "react-use"
      // process.env.NODE_ENV === 'production' && 'inversify-react',
    ]) ?? [],
    transpilePatterns: [
      /^react-native-(?!web)/,
      /^@react-navigation.*/,
      /^@react-native.*/,
      /^expo-.*/,
      /^@expo.*/
    ]
  };
});
export {
  bundleConfig
};
