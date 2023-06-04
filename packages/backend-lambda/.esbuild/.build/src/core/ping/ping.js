"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// ../lib-backend/src/serverless/utils/createHandler/_createHandler.ts
var _createHandler = /* @__PURE__ */ __name((handler) => async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler(event, context, callback);
}, "_createHandler");

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvcGluZy9waW5nLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlSGFuZGxlcihhc3luYyAoKSA9PiAoe1xuICBib2R5OiBKU09OLnN0cmluZ2lmeSgnc3VjY2VzcycpLFxuICBoZWFkZXJzOiB7ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfSxcbiAgc3RhdHVzQ29kZTogMjAwLFxufSkpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9DcmVhdGVIYW5kbGVyTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9jcmVhdGVIYW5kbGVyL19jcmVhdGVIYW5kbGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY3JlYXRlSGFuZGxlcjogX0NyZWF0ZUhhbmRsZXJNb2RlbCA9XG4gIChoYW5kbGVyKSA9PiBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9O1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNHTyxJQUFNLGlCQUNYLHdCQUFDLFlBQVksT0FBTyxPQUFPLFNBQVMsYUFBYTtBQUMvQyxVQUFRLGlDQUFpQztBQUN6QyxTQUFPLFFBQVEsT0FBTyxTQUFTLFFBQVE7QUFDekMsR0FIQTs7O0FEREssSUFBTSxPQUFPLGVBQWMsYUFBYTtBQUFBLEVBQzdDLE1BQU0sS0FBSyxVQUFVLFNBQVM7QUFBQSxFQUM5QixTQUFTLEVBQUUsK0JBQStCLElBQUk7QUFBQSxFQUM5QyxZQUFZO0FBQ2QsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
