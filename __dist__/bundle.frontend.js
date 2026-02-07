import { b as bundleConfig$1, _ as _Container, E as Environment, f as filterNil, a as fromPublic, A as ASSETS_DIR } from "./tasks.js";
const bundleConfig = bundleConfig$1.extend(() => {
  const environment = _Container.get(Environment);
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
        false
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
      __DEV__: `${!environment.variables.NODE_RUNTIME}`
    },
    envPrefix: ["APP_", "SERVER_APP_"],
    externals: ["firebase"],
    publicPathname: fromPublic(),
    transpileModules: filterNil([
      // '@egjs/react-infinitegrid',
      // '@expo/react-native-action-sheet',
      // '@shopify/flash-list',
      // '@uiw/react-md-editor',
      // 'countries-list',
      // 'moti',
      // 'redux-persist',
      // TODO: fix?
      // process.env.NODE_ENV === 'production' && '@emotion/react',
      false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmZyb250ZW5kLmpzIiwic291cmNlcyI6WyIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2J1bmRsZS9idW5kbGUuZnJvbnRlbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVB1YmxpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QdWJsaWMvZnJvbVB1YmxpYyc7XG5pbXBvcnQgeyBBU1NFVFNfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidW5kbGVDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuXG5leHBvcnQgY29uc3QgYnVuZGxlQ29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4ge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogW1xuICAgICAge1xuICAgICAgICBmcm9tOiAncmVhY3QtbmF0aXZlLWlzLWVkZ2UtdG8tZWRnZScsXG4gICAgICAgIHRvOiAncmVhY3QtbmF0aXZlLWlzLWVkZ2UtdG8tZWRnZS9kaXN0L2luZGV4Lm1qcycsXG4gICAgICB9LFxuXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGZyb206IC9eaW5saW5lLXN0eWxlLXByZWZpeGVyXFwvbGliXFwvKC4qKS8sXG4gICAgICAvLyAgIHRvOiAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2VzLyQxLmpzJyxcbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIGZyb206ICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliJyxcbiAgICAgICAgdG86ICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZXMnLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBmcm9tOiAnY3NzLWluLWpzLXV0aWxzL2xpYicsXG4gICAgICAgIHRvOiAnY3NzLWluLWpzLXV0aWxzL2VzJyxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIC8vIGV4dGVybmFsczogW1xuICAgIC8vICAgJ2pzb24tc3RyaW5naWZ5LXNhZmUnLFxuICAgIC8vICAgJ25vcm1hbGl6ZS1jc3MtY29sb3InLFxuICAgIC8vICAgJ3Bpbm8nLFxuICAgIC8vICAgJ3Bvc3Rjc3MtdmFsdWUtcGFyc2VyJyxcbiAgICAvLyAgICdyYWYvcG9seWZpbGwuanMnLFxuICAgIC8vICAgJ3JlYWN0LWRvbScsXG4gICAgLy8gICAncmVhY3QnLFxuICAgIC8vICAgJ3JlYWN0LWZhc3QtY29tcGFyZScsXG4gICAgLy8gICAncmVhY3QtcmVkdXgnLFxuICAgIC8vICAgJ3JlYWN0L2pzeC1ydW50aW1lJyxcbiAgICAvLyAgICdzZXRpbW1lZGlhdGUnLFxuICAgIC8vICAgJ3N0eWxlcScsXG4gICAgLy8gICAndm9pZC1lbGVtZW50cycsXG4gICAgLy8gICAvbG9kYXNoLyxcbiAgICAvLyBdLFxuICAgIGFzc2V0c0RpcjogQVNTRVRTX0RJUixcblxuICAgIGJhYmVsOiB7XG4gICAgICBwbHVnaW5zOiBmaWx0ZXJOaWwoW1xuICAgICAgICBbJ3RyYW5zZm9ybS1yZWFjdC1yZW1vdmUtcHJvcC10eXBlcycsIHsgcmVtb3ZlSW1wb3J0OiB0cnVlIH1dIGFzIFtcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgICAgIF0sXG5cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiBbXG4gICAgICAgICAgJ3JlYWN0LXJlbW92ZS1wcm9wZXJ0aWVzJyxcbiAgICAgICAgICB7IHByb3BlcnRpZXM6IFsndGVzdElEJ10gfSxcbiAgICAgICAgXSxcblxuICAgICAgICAvLyAncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQvcGx1Z2luJyxcbiAgICAgIF0pLFxuXG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIFsnQGJhYmVsL3ByZXNldC1yZWFjdCcsIHsgcnVudGltZTogJ2F1dG9tYXRpYycgfV0sXG4gICAgICAgICdAYmFiZWwvcHJlc2V0LWZsb3cnLFxuICAgICAgICAnQGJhYmVsL3ByZXNldC10eXBlc2NyaXB0JyxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIGRlZHVwZTogWydyZWFjdCddLFxuXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0RFVl9fOiBgJHtcbiAgICAgICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpICYmXG4gICAgICAgICFlbnZpcm9ubWVudC52YXJpYWJsZXMuTk9ERV9SVU5USU1FXG4gICAgICB9YCxcbiAgICB9LFxuXG4gICAgZW52UHJlZml4OiBbJ0FQUF8nLCAnU0VSVkVSX0FQUF8nXSxcblxuICAgIGV4dGVybmFsczogWydmaXJlYmFzZSddLFxuXG4gICAgcHVibGljUGF0aG5hbWU6IGZyb21QdWJsaWMoKSxcblxuICAgIHRyYW5zcGlsZU1vZHVsZXM6XG4gICAgICBmaWx0ZXJOaWwoW1xuICAgICAgICAvLyAnQGVnanMvcmVhY3QtaW5maW5pdGVncmlkJyxcbiAgICAgICAgLy8gJ0BleHBvL3JlYWN0LW5hdGl2ZS1hY3Rpb24tc2hlZXQnLFxuICAgICAgICAvLyAnQHNob3BpZnkvZmxhc2gtbGlzdCcsXG4gICAgICAgIC8vICdAdWl3L3JlYWN0LW1kLWVkaXRvcicsXG4gICAgICAgIC8vICdjb3VudHJpZXMtbGlzdCcsXG4gICAgICAgIC8vICdtb3RpJyxcbiAgICAgICAgLy8gJ3JlZHV4LXBlcnNpc3QnLFxuICAgICAgICAvLyBUT0RPOiBmaXg/XG4gICAgICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ0BlbW90aW9uL3JlYWN0JyxcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAncmVhY3QtdXNlJyxcbiAgICAgICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnaW52ZXJzaWZ5LXJlYWN0JyxcbiAgICAgIF0pID8/IFtdLFxuXG4gICAgdHJhbnNwaWxlUGF0dGVybnM6IFtcbiAgICAgIC9ecmVhY3QtbmF0aXZlLSg/IXdlYikvLFxuICAgICAgL15AcmVhY3QtbmF2aWdhdGlvbi4qLyxcbiAgICAgIC9eQHJlYWN0LW5hdGl2ZS4qLyxcbiAgICAgIC9eZXhwby0uKi8sXG4gICAgICAvXkBleHBvLiovLFxuICAgIF0sXG4gIH07XG59KTtcbiJdLCJuYW1lcyI6WyJjb25maWdCYXNlIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO0FBT08sTUFBTSxlQUFlQSxlQUFXLE9BQU8sTUFBTTtBQUNsRCxRQUFNLGNBQWNDLFdBQVUsSUFBSSxXQUFXO0FBRTdDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixJQUFJO0FBQUEsTUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPTjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sSUFBSTtBQUFBLE1BQUE7QUFBQSxNQUdOO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixJQUFJO0FBQUEsTUFBQTtBQUFBLElBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbUJGLFdBQVc7QUFBQSxJQUVYLE9BQU87QUFBQSxNQUNMLFNBQVMsVUFBVTtBQUFBLFFBQ2pCLENBQUMscUNBQXFDLEVBQUUsY0FBYyxNQUFNO0FBQUEsUUFLNUQ7QUFBQTtBQUFBLE1BQUEsQ0FNRDtBQUFBLE1BRUQsU0FBUztBQUFBLFFBQ1AsQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLGFBQWE7QUFBQSxRQUNoRDtBQUFBLFFBQ0E7QUFBQSxNQUFBO0FBQUEsSUFDRjtBQUFBLElBR0YsUUFBUSxDQUFDLE9BQU87QUFBQSxJQUVoQixRQUFRO0FBQUEsTUFDTixTQUFTLEdBRVAsQ0FBQyxZQUFZLFVBQVUsWUFDekI7QUFBQSxJQUFBO0FBQUEsSUFHRixXQUFXLENBQUMsUUFBUSxhQUFhO0FBQUEsSUFFakMsV0FBVyxDQUFDLFVBQVU7QUFBQSxJQUV0QixnQkFBZ0IsV0FBQTtBQUFBLElBRWhCLGtCQUNFLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVVSO0FBQUE7QUFBQSxJQUFBLENBRUQsS0FBSyxDQUFBO0FBQUEsSUFFUixtQkFBbUI7QUFBQSxNQUNqQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUFBO0FBQUEsRUFDRjtBQUVKLENBQUM7In0=
