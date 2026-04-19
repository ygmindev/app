import { ping } from '@lib/backend/http/handlers/ping/ping';
import { type ApiConfigModel } from '@lib/config/api/api.models';
import { Config } from '@lib/config/utils/Config/Config';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';

export const apiConfig = new Config<ApiConfigModel>({
  params: () =>
    ({
      prefix: 'api',

      routes: [
        {
          handler: ping,
          method: HTTP_METHOD.GET,
          pathname: PING,
        },
      ],
    }) as ApiConfigModel,
});
