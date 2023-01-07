import type {
  _ServerModel,
  _ServerParamsModel,
} from '@tool/task/framework/web/utils/server/_server.models';
import express from 'express';
import { createServer } from 'vite';
import { renderPage } from 'vite-plugin-ssr';

export const _server = async ({
  configFile,
  port,
  root,
}: _ServerParamsModel): Promise<_ServerModel> => {
  const app = express();

  const { middlewares } = await createServer({
    configFile,
    root,
    server: { middlewareMode: true },
  });

  app.use(middlewares);

  app.get('*', async (req, res, next) => {
    const pageContext = await renderPage({ urlOriginal: req.originalUrl });
    const { errorWhileRendering, httpResponse } = pageContext;

    if (httpResponse) {
      const { contentType, earlyHints, pipe, statusCode } = httpResponse;
      res.writeEarlyHints && res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      res.status(statusCode).type(contentType);
      pipe(res);
    } else if (errorWhileRendering) {
      // TODO: better error handling
      res.status(500).send(errorWhileRendering);
    }
    return next();
  });

  app.listen(port);
};
