import { ping } from '@lib/backend/http/handlers/ping/ping';
import { type ApiConfigModel } from '@lib/config/api/api.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';

const config = defineConfig<ApiConfigModel>({
  params: () =>
    ({
      prefix: 'api',

      routes: [{ handler: ping, method: HTTP_METHOD.GET, pathname: PING }],
    }) as ApiConfigModel,
});

export default config;
