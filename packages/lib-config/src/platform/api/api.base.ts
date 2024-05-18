import { ping } from '@lib/backend/http/handlers/ping/ping';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ApiConfigModel } from '@lib/config/platform/api/api.models';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';

const { config } = defineConfig({
  config: {
    prefix: 'api',

    routes: [{ handler: ping, method: HTTP_METHOD.GET, pathname: PING }],
  } as ApiConfigModel,
});

export { config };
