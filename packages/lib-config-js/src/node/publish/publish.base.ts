import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { _publish } from '@lib/config/node/publish/_publish';
import {
  type _PublishConfigModel,
  type PublishConfigModel,
} from '@lib/config/node/publish/publish.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { readFileSync } from 'fs';

export const config = defineConfig<PublishConfigModel, _PublishConfigModel>({
  config: _publish,

  params: () => {
    const packageJson = JSON.parse(readFileSync(fromWorking('package.json')).toString()) as {
      name: string;
    };
    const configPathname = fromWorking(BUILD_DIR, 'publish.json');
    return {
      configPathname,

      name: slug(packageJson.name),

      publishCommand: () => `npx wrangler deploy --config ${configPathname}`,
    };
  },
});

export default config;
