import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { type PublishConfigModel } from '@lib/config/node/publish/publish.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { readFileSync } from 'fs';

export const config = defineConfig<PublishConfigModel>({
  params: () => {
    const packageJson = JSON.parse(readFileSync(fromWorking('package.json')).toString()) as {
      name: string;
    };
    const assetsPathname = fromWorking(BUILD_DIR, 'client');
    const name = slug(packageJson.name);
    return {
      assetsPathname,

      name,

      publishCommand: () =>
        `npx wrangler pages deploy ${assetsPathname} --project-name ${name} --branch main`,
    };
  },
});

export default config;
