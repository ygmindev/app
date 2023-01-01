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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvcGluZy9waW5nLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9jcmVhdGVIYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jICgpID0+ICh7XG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KCdzdWNjZXNzJyksXG4gIGhlYWRlcnM6IHsgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyB9LFxuICBzdGF0dXNDb2RlOiAyMDAsXG59KSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBfQ3JlYXRlSGFuZGxlck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9jcmVhdGVIYW5kbGVyL19jcmVhdGVIYW5kbGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY3JlYXRlSGFuZGxlcjogX0NyZWF0ZUhhbmRsZXJNb2RlbCA9XG4gIChoYW5kbGVyKSA9PiBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNFTyxJQUFNLGlCQUNYLENBQUMsWUFBWSxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQy9DLFVBQVEsaUNBQWlDO0FBQ3pDLFNBQU8sUUFBUSxPQUFPLFNBQVMsUUFBUTtBQUN6Qzs7O0FESkssSUFBTSxPQUFPLGVBQWMsYUFBYTtBQUFBLEVBQzdDLE1BQU0sS0FBSyxVQUFVLFNBQVM7QUFBQSxFQUM5QixTQUFTLEVBQUUsK0JBQStCLElBQUk7QUFBQSxFQUM5QyxZQUFZO0FBQ2QsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
