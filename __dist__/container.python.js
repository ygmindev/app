import { c as containerConfig$1, d as fromConfig } from "./tasks.js";
const containerConfig = containerConfig$1.extend(() => ({
  dockerPathname: fromConfig("container/python/Dockerfile")
}));
export {
  containerConfig
};
