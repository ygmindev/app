import { bundleConfig as bundleConfig$1 } from "./bundle.frontend.js";
import { P as PLATFORM, s as serverConfig, f as filterNil } from "./tasks.js";
const bundleConfig = bundleConfig$1.extend(() => ({
  aliases: filterNil([
    { from: /^react-native$/, to: "react-native-web" },
    false
  ]),
  babel: {
    plugins: [
      // For react-native-reanimated
      // https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support
      "@babel/plugin-proposal-export-namespace-from"
    ]
  },
  dedupe: ["react-dom", "react-native-web"],
  define: {
    global: "globalThis"
  },
  platform: PLATFORM.WEB,
  server: {
    certificate: serverConfig.params().certificate
  },
  transpileModules: ["react-dom/client", "react-native-web", "inline-style-prefixer", "css-in-js-utils"]
}));
export {
  bundleConfig
};
