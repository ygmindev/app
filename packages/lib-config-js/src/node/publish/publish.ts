import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { type PublishConfigModel } from '@lib/config/node/publish/publish.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { config as dotenvConfig } from 'dotenv';
import { existsSync, readFileSync, writeFileSync } from 'fs';

export const config = defineConfig<PublishConfigModel>({
  params: () => {
    const packageJson = JSON.parse(readFileSync(fromWorking('package.json')).toString()) as {
      name: string;
    };
    const assetsPathname = fromWorking(BUILD_DIR, 'client');
    const name = slug(packageJson.name);

    const envPathname = fromWorking(BUILD_DIR, '.env.production');
    let jsonPathname: string | undefined;
    if (existsSync(envPathname)) {
      const { error, parsed } = dotenvConfig({ override: true, path: envPathname });
      if (!error && parsed) {
        const jsonPathname = fromWorking(BUILD_DIR, '.env.production.json');
        writeFileSync(jsonPathname, JSON.stringify(parsed, null, 2));
      }
    }

    return {
      assetsPathname,

      name,

      // publishCommand: () =>
      //   filterNil([
      //     `npx wrangler pages deploy ${assetsPathname} --project-name ${name} --branch main`,
      //     jsonPathname &&
      //       `npx wrangler pages secret put bulk ${jsonPathname} --project-name ${name}`,
      //     jsonPathname && `rm -rf ${jsonPathname}`,
      //   ]).join(' && '),

      publishCommand: () =>
        filterNil([
          `npx wrangler pages deploy ${assetsPathname} --project-name ${name} --branch main`,
          jsonPathname &&
            `npx wrangler pages secret put bulk ${jsonPathname} --project-name ${name}`,
          jsonPathname && `rm -rf ${jsonPathname}`,
        ]).join(' && '),
    };
  },
});

export default config;
