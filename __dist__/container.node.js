import { c as fromConfig } from "./tasks.js";
import { containerConfig as containerConfig$1 } from "./container.base.js";
const containerConfig = containerConfig$1.extend(() => ({
  dirname: fromConfig("container/node")
}));
export {
  containerConfig
};
