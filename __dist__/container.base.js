var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { C as Config, _ as _Container, E as Environment, d as EXCLUDE_PATTERNS, B as BUILD_DIR } from "./tasks.js";
const containerConfig = new Config({
  params: /* @__PURE__ */ __name(() => {
    const environment = _Container.get(Environment);
    return {
      dockerfilename: "Dockerfile",
      ignore: EXCLUDE_PATTERNS.filter((v) => v !== BUILD_DIR),
      image: environment.variables.APP_NAME,
      password: environment.variables.GITHUB_TOKEN,
      platform: environment.variables.CONTAINER_PLATFORM,
      server: environment.variables.CONTAINER_HOST,
      tag: environment.variables.CONTAINER_TAG,
      username: environment.variables.CONTAINER_USERNAME
    };
  }, "params")
});
export {
  containerConfig
};
