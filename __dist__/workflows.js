var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { proxyActivities, workflowInfo, startChild, executeChild } from "@temporalio/workflow";
import { readdirSync, statSync, readFileSync } from "fs";
import { normalize, join } from "path";
import appRootPath from "app-root-path";
import trimStart from "lodash/trimStart.js";
var LOG_MESSAGE_TYPE = /* @__PURE__ */ ((LOG_MESSAGE_TYPE2) => {
  LOG_MESSAGE_TYPE2["FAIL"] = "fail";
  LOG_MESSAGE_TYPE2["SUCCESS"] = "success";
  return LOG_MESSAGE_TYPE2;
})(LOG_MESSAGE_TYPE || {});
var WORKFLOW_EXECUTION = /* @__PURE__ */ ((WORKFLOW_EXECUTION2) => {
  WORKFLOW_EXECUTION2["PARALLEL"] = "parallel";
  WORKFLOW_EXECUTION2["SEQUENTIAL"] = "sequential";
  return WORKFLOW_EXECUTION2;
})(WORKFLOW_EXECUTION || {});
var WORKFLOW_STEP_TYPE = /* @__PURE__ */ ((WORKFLOW_STEP_TYPE2) => {
  WORKFLOW_STEP_TYPE2["TASK"] = "task";
  WORKFLOW_STEP_TYPE2["WORKFLOW"] = "workflow";
  return WORKFLOW_STEP_TYPE2;
})(WORKFLOW_STEP_TYPE || {});
const _NotFoundError = class _NotFoundError extends Error {
  constructor(message) {
    super(`not found: ${message}`);
  }
};
__name(_NotFoundError, "NotFoundError");
let NotFoundError = _NotFoundError;
const mapSequence = /* @__PURE__ */ __name(async (params) => {
  if (params.length === 0) return [];
  const [first, ...rest] = params;
  return [await first(), ...await mapSequence(rest)];
}, "mapSequence");
const STATUS_UPDATE = "statusUpdate";
const WORKFLOW_RETRY_DEFAULT = 3;
const WORKFLOW_INTERVAL_DEFAULT = 1e3;
const WORKFLOW_TIMEOUT_DEFAULT = 6e4;
const _buildWorkflow = /* @__PURE__ */ __name(({
  execution = WORKFLOW_EXECUTION.SEQUENTIAL,
  interval = WORKFLOW_INTERVAL_DEFAULT,
  retry = WORKFLOW_RETRY_DEFAULT,
  steps,
  timeout = WORKFLOW_TIMEOUT_DEFAULT
}) => {
  const proxy = proxyActivities({
    retry: { initialInterval: interval, maximumAttempts: retry },
    startToCloseTimeout: timeout
  });
  const isParallel = execution === WORKFLOW_EXECUTION.PARALLEL;
  return async (workflowParams, workflowContext) => {
    const { workflowId } = workflowInfo();
    const executions = steps(workflowParams, workflowContext).map((v) => {
      const { context, name, params, type = WORKFLOW_STEP_TYPE.TASK } = v;
      const contextF = { ...workflowContext, ...context, workflowId };
      const runnable = (() => {
        switch (type) {
          case WORKFLOW_STEP_TYPE.TASK: {
            const task = proxy[name];
            if (!task) {
              throw new NotFoundError(name);
            }
            return async () => task(params, contextF);
          }
          case WORKFLOW_STEP_TYPE.WORKFLOW: {
            return async () => (isParallel ? startChild : executeChild)(name, { args: [params, contextF] });
          }
        }
      })();
      return async () => runnable?.();
    });
    try {
      const result = await (isParallel ? Promise.all(executions.map((v) => v())) : mapSequence(executions));
      await proxy[STATUS_UPDATE]({ id: workflowId, type: LOG_MESSAGE_TYPE.SUCCESS });
      return result;
    } catch (e) {
      await proxy[STATUS_UPDATE]({ id: workflowId, type: LOG_MESSAGE_TYPE.FAIL });
      throw e;
    }
  };
}, "_buildWorkflow");
const buildWorkflow = /* @__PURE__ */ __name((params) => _buildWorkflow(params), "buildWorkflow");
var ENVIRONMENT = /* @__PURE__ */ ((ENVIRONMENT2) => {
  ENVIRONMENT2["DEVELOPMENT"] = "development";
  ENVIRONMENT2["PRODUCTION"] = "production";
  ENVIRONMENT2["TEST"] = "test";
  return ENVIRONMENT2;
})(ENVIRONMENT || {});
var PLATFORM = /* @__PURE__ */ ((PLATFORM2) => {
  PLATFORM2["ANDROID"] = "android";
  PLATFORM2["BASE"] = "base";
  PLATFORM2["IOS"] = "ios";
  PLATFORM2["NODE"] = "node";
  PLATFORM2["PYTHON"] = "python";
  PLATFORM2["WEB"] = "web";
  return PLATFORM2;
})(PLATFORM || {});
const EXECUTE_PARALLEL = "executeParallel";
const webDev$1 = {
  context: {
    overrrides: {
      ENV_PLATFORM: PLATFORM.WEB
    }
  },
  steps: /* @__PURE__ */ __name(({ name }, context) => [
    {
      name: EXECUTE_PARALLEL,
      params: {
        commands: [
          `run serverDev --app=@service/${name} --pathname=src/index.ts`,
          `run serverDev --app=@app/web-${name} --pathname=src/index.ts`
        ]
      }
    }
  ], "steps")
};
const webDev = buildWorkflow(webDev$1);
const START = "start";
const orchestratorRun$1 = {
  context: {
    environment: ENVIRONMENT.DEVELOPMENT
  },
  steps: /* @__PURE__ */ __name(() => [{ name: START, params: { command: "temporal server start-dev" } }], "steps")
};
const orchestratorRun = buildWorkflow(orchestratorRun$1);
const CONTAINER_BUILD = "containerBuild";
const CONTAINER_PUBLISH = "containerPublish";
const children = /* @__PURE__ */ __name((...[from, options]) => {
  const root = `/${normalize(from)}`;
  return readdirSync(root, { withFileTypes: true }).map((directory) => {
    const fullPath = join(root, directory.name);
    const stat = statSync(fullPath);
    return {
      fullPath,
      isDirectory: directory.isDirectory(),
      lastUpdated: new Date(stat.mtime.getTime()),
      name: directory.name
    };
  }).filter(
    ({ isDirectory: isDirectoryF, name }) => !name.startsWith(".") && (options?.isDirectory === void 0 || options?.isDirectory === isDirectoryF)
  );
}, "children");
const _getRoot = /* @__PURE__ */ __name(() => appRootPath.path, "_getRoot");
const getRoot = /* @__PURE__ */ __name(() => _getRoot(), "getRoot");
const filterNil = /* @__PURE__ */ __name((params) => params?.filter(Boolean), "filterNil");
const joinPaths = /* @__PURE__ */ __name((...[paths, options]) => {
  let path = join(...filterNil(paths));
  options?.extension && (path = `${path}.${trimStart(options.extension, ".")}`);
  return path;
}, "joinPaths");
const fromRoot = /* @__PURE__ */ __name((...paths) => joinPaths([getRoot(), ...paths]), "fromRoot");
const fromPackages = /* @__PURE__ */ __name((...paths) => fromRoot("packages", ...paths), "fromPackages");
const fromWorking = /* @__PURE__ */ __name((...paths) => joinPaths([process.cwd(), ...paths]), "fromWorking");
const packageInfo = /* @__PURE__ */ __name((dirname) => {
  const from = dirname ?? fromWorking();
  return JSON.parse(readFileSync(joinPaths([from, "package.json"])).toString());
}, "packageInfo");
const appPrompt = /* @__PURE__ */ __name(({ defaultApp } = {}) => {
  const options = filterNil(
    children(fromPackages()).map((v) => {
      try {
        const { name } = packageInfo(v.fullPath);
        return { id: name ?? "", label: name };
      } catch {
        return null;
      }
    })
  );
  return { defaultValue: defaultApp ? [defaultApp] : void 0, key: "app", options };
}, "appPrompt");
const SERVER_BUILD = "serverBuild";
const serverPublish$1 = {
  prompts: [appPrompt()],
  steps: /* @__PURE__ */ __name((params, context) => [
    {
      context: { ...context, app: params.app },
      name: SERVER_BUILD,
      type: WORKFLOW_STEP_TYPE.WORKFLOW
    },
    {
      context: { ...context, app: params.app },
      name: CONTAINER_BUILD,
      params: { dockerfilename: "Dockerfile.server", image: `${params.app}-server` }
    },
    {
      context: { ...context, app: params.app },
      name: CONTAINER_PUBLISH,
      params: { dockerfilename: "Dockerfile.server", image: `${params.app}-server` }
    }
  ], "steps")
};
const serverPublish = buildWorkflow(serverPublish$1);
const NODE_DEV = "nodeDev";
const serverDev$1 = {
  prompts: [appPrompt()],
  steps: /* @__PURE__ */ __name(({ app, pathname }, context) => [
    {
      context: { ...context, app },
      name: NODE_DEV,
      params: { pathname }
    }
  ], "steps")
};
const serverDev = buildWorkflow(serverDev$1);
const NODE_BUILD = "nodeBuild";
const serverBuild$1 = {
  steps: /* @__PURE__ */ __name(({ entryFiles = "src/index.ts", format, outDirname, watch }, context) => [
    {
      context,
      name: NODE_BUILD,
      params: {
        entryFiles,
        format,
        outDirname,
        watch
      }
    }
  ], "steps")
};
const serverBuild = buildWorkflow(serverBuild$1);
const BUILD_LINT = "buildLint";
const BUILD_TYPESCRIPT = "buildTypescript";
const buildConfig$1 = {
  steps: /* @__PURE__ */ __name(() => [{ name: BUILD_LINT }, { name: BUILD_TYPESCRIPT }], "steps")
};
const buildConfig = buildWorkflow(buildConfig$1);
const PING_TASK = "pingTask";
const pingWorkflow$1 = {
  steps: /* @__PURE__ */ __name((params, context) => [{ name: PING_TASK, params }], "steps")
};
const pingWorkflow = buildWorkflow(pingWorkflow$1);
export {
  buildConfig,
  orchestratorRun,
  pingWorkflow,
  serverBuild,
  serverDev,
  serverPublish,
  webDev
};
