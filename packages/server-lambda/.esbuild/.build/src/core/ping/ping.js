"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/core/ping/ping.ts
var ping_exports = {};
__export(ping_exports, {
  main: () => main
});
module.exports = __toCommonJS(ping_exports);

// ../lib-backend/src/lambda/utils/createHandler/_createHandler.ts
var _createHandler = (handler) => async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler(event, context, callback);
};

// src/core/ping/ping.ts
var main = _createHandler(async () => ({
  body: JSON.stringify("success"),
  headers: { "Access-Control-Allow-Origin": "*" },
  statusCode: 200
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
