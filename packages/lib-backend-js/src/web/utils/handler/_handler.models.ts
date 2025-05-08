export type _HandlerParamsModel = {
  onRequest(request: Request, response: Response): Promise<Response>;
};

export type _HandlerModel = {
  fetch(request: Request): Promise<Response>;
};
