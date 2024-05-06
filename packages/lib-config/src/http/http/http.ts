import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type HttpConfigModel } from '@lib/config/http/http/http.models';

const { config } = defineConfig({
  config: () =>
    ({
      certificate: {
        caFile: 'rootCA.pem',

        certificateDir: fromStatic('certificates'),

        privateKeyFile: process.env.SERVER_SSL_PRIVATE_KEY,

        publicKeyFile: process.env.SERVER_SSL_PUBLIC_KEY,
      },
    }) satisfies HttpConfigModel,
});

export { config };
