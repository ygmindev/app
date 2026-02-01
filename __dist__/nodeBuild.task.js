var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { f as fromWorking, a as filterNil, I as InvalidArgumentError, b as fromPackages, m as merge, c as cleanObject, g as getAppRoot, d as fromRoot, E as Environment, C as Config, e as fromBuild, h as bundleConfig$1, P as PLATFORM, M as MERGE_STRATEGY } from "./index.js";
import { checkbox, search, confirm, input } from "@inquirer/prompts";
import { Document } from "flexsearch";
import uniqBy from "lodash/uniqBy.js";
import reduce from "lodash/reduce.js";
import { fileSelector } from "inquirer-file-selector";
import startCase from "lodash/startCase.js";
import toString from "lodash/toString.js";
import { globSync } from "glob";
import { build } from "vite";
var ENVIRONMENT = /* @__PURE__ */ ((ENVIRONMENT2) => {
  ENVIRONMENT2["DEVELOPMENT"] = "development";
  ENVIRONMENT2["PRODUCTION"] = "production";
  ENVIRONMENT2["TEST"] = "test";
  return ENVIRONMENT2;
})(ENVIRONMENT || {});
const withDir = /* @__PURE__ */ __name(async (...[dirname, fn]) => {
  const workingDir = fromWorking();
  process.chdir(dirname);
  const result = await fn();
  process.chdir(workingDir);
  return result;
}, "withDir");
const __Fuzzy = class __Fuzzy {
  constructor({ keys, options }) {
    this.search = async (query, { limit } = {}) => {
      return filterNil(
        uniqBy(await this.index.searchAsync({ enrich: true, limit, query }), "id")?.map((v) => v.result.map((vv) => vv.doc)).flat()
      );
    };
    this.index = new Document({
      document: {
        id: "id",
        index: keys,
        store: true
      },
      tokenize: "forward"
    });
    options.forEach((v) => this.index.add(v));
  }
};
__name(__Fuzzy, "_Fuzzy");
let _Fuzzy = __Fuzzy;
const _Fuzzy2 = class _Fuzzy2 extends _Fuzzy {
  constructor(params) {
    super(params);
  }
};
__name(_Fuzzy2, "Fuzzy");
let Fuzzy = _Fuzzy2;
var BOOLEAN_STRING = /* @__PURE__ */ ((BOOLEAN_STRING2) => {
  BOOLEAN_STRING2["FALSE"] = "false";
  BOOLEAN_STRING2["TRUE"] = "true";
  return BOOLEAN_STRING2;
})(BOOLEAN_STRING || {});
const reduceSequence = /* @__PURE__ */ __name(async (...[values, reducer, initialResult]) => reduce(
  values,
  async (result, v, k) => reducer(await result, v, k),
  Promise.resolve(initialResult)
), "reduceSequence");
var PROMPT_TYPE = /* @__PURE__ */ ((PROMPT_TYPE2) => {
  PROMPT_TYPE2["CONFIRM"] = "confirm";
  PROMPT_TYPE2["DIRECTORY"] = "directory";
  PROMPT_TYPE2["INPUT"] = "input";
  PROMPT_TYPE2["LIST"] = "list";
  PROMPT_TYPE2["MULTIPLE"] = "checkbox";
  return PROMPT_TYPE2;
})(PROMPT_TYPE || {});
const _prompt = /* @__PURE__ */ __name(async (prompts) => reduceSequence(
  prompts,
  async (result, {
    key,
    type,
    message = `${startCase(toString(key))}?`,
    options,
    isOptional,
    defaultValue,
    basePath = fromPackages()
  }) => {
    const typeF = type ?? (options ? PROMPT_TYPE.LIST : PROMPT_TYPE.INPUT);
    const messageF = `${message}${isOptional ? " (Optional)" : ""}`;
    const getChoices = /* @__PURE__ */ __name(async (query) => {
      let optionsF = options ?? [];
      if (query) {
        const fuzzy = new Fuzzy({
          keys: ["id", "label"],
          options: optionsF
        });
        optionsF = await fuzzy.search(query);
      }
      if (defaultValue) {
        const i = optionsF.findIndex((v2) => defaultValue.includes(v2.id));
        if (i > 0) {
          const [match] = optionsF.splice(i, 1);
          optionsF.unshift(match);
        }
      }
      return optionsF.map((option) => ({
        checked: typeF === PROMPT_TYPE.MULTIPLE && options && defaultValue?.includes(option.id),
        name: option.label,
        value: option.id
      }));
    }, "getChoices");
    const v = await (async () => {
      switch (typeF) {
        case PROMPT_TYPE.INPUT:
          return input({ message: messageF });
        case PROMPT_TYPE.CONFIRM:
          return confirm({
            default: Boolean(defaultValue?.[0] ?? BOOLEAN_STRING.FALSE),
            message: messageF
          });
        case PROMPT_TYPE.LIST:
          return search({ message: messageF, source: getChoices });
        case PROMPT_TYPE.MULTIPLE:
          return checkbox({ choices: await getChoices(), message: messageF });
        case PROMPT_TYPE.DIRECTORY:
          return (await fileSelector({
            allowCancel: true,
            basePath,
            message: messageF
          }))?.path;
        default:
          throw new InvalidArgumentError("prompt type");
      }
    })();
    return { ...result, [key]: v };
  },
  {}
), "_prompt");
const prompt = /* @__PURE__ */ __name(async (params) => _prompt(params), "prompt");
const buildTask = /* @__PURE__ */ __name(({
  context,
  name,
  params,
  prompts,
  task: fn
}) => async (paramsOverrides, contextOverrides) => {
  let paramsF = merge([cleanObject(paramsOverrides), params]);
  const promptsF = prompts?.filter((v) => !(v.key in paramsF));
  promptsF?.length && (paramsF = { ...paramsF, ...await prompt(promptsF) });
  const contextF = merge([cleanObject(contextOverrides), context]);
  contextF.root = contextF.root ?? (contextF.app ? await getAppRoot(contextF.app) : fromRoot());
  const environment = "production";
  const env = new Environment({
    app: contextF.app,
    environment,
    overrrides: contextF.overrrides
  });
  await env.initialize();
  return withDir(contextF.root, async () => fn(paramsF, contextF));
}, "buildTask");
const _fromGlobs = /* @__PURE__ */ __name((...[globs, { exclude, isAbsolute = false, root = fromWorking() } = {}]) => globs.map((glob) => globSync(glob, { absolute: isAbsolute, cwd: root, ignore: exclude })).flat(1), "_fromGlobs");
const fromGlobs = /* @__PURE__ */ __name((...params) => _fromGlobs(...params), "fromGlobs");
const TASK_QUEUE_DEFAULT = "task-queue";
const taskConfig = new Config({
  params: /* @__PURE__ */ __name(() => ({
    queue: TASK_QUEUE_DEFAULT,
    taskExtension: ".task.ts",
    tasksPathname: fromBuild("tasks.js"),
    wait: {
      delay: 1e3,
      interval: 1e3,
      timeout: 6e4
    },
    workerCountDefault: 1,
    workflowExtension: ".workflow.ts",
    workflowsPathname: fromBuild("workflows.js")
  }), "params")
});
const bundleConfig = bundleConfig$1.extend(() => {
  const { taskExtension, tasksPathname, workflowExtension, workflowsPathname } = taskConfig.params();
  return {
    // barrelFiles: [
    //   [
    //     fromGlobs([fromPackages(`*/src/**/*/*${taskExtension}`)], { isAbsolute: true }),
    //     { outPathname: tasksPathname },
    //   ],
    //   [
    //     fromGlobs([fromPackages(`*/src/**/*/*${workflowExtension}`)], { isAbsolute: true }),
    //     { outPathname: workflowsPathname },
    //   ],
    // ],
    envPrefix: ["SERVER_"],
    externals: [/node_modules/, "@eslint/js", "globals", "canvas"],
    platform: PLATFORM.NODE,
    preBundle: [
      ...fromGlobs([fromPackages("*/src/**/*.transport.ts")], { isAbsolute: true }).map((v) => ({
        entryFiles: v
      }))
    ],
    transpilePatterns: filterNil([false])
  };
});
const _nodeBuild = /* @__PURE__ */ __name(async ({
  configRaw,
  entryFiles,
  format,
  outDirname,
  watch
}) => {
  let config = configRaw ?? {};
  config = merge(
    [
      bundleConfig.config({ entryFiles, format, outDirname, watch }, MERGE_STRATEGY.DEEP_PREPEND),
      config
    ],
    MERGE_STRATEGY.DEEP_PREPEND
  );
  await build({ ...config, configFile: false });
}, "_nodeBuild");
const NODE_BUILD = "nodeBuild";
const nodeBuild = buildTask({
  context: {
    environment: ENVIRONMENT.PRODUCTION
  },
  name: NODE_BUILD,
  task: /* @__PURE__ */ __name(async (params) => _nodeBuild(params), "task")
});
export {
  nodeBuild
};
