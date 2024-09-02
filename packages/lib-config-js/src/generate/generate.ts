import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import fileConfig from '@lib/config/file/file';
import { type GenerateConfigModel } from '@lib/config/generate/generate.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { jsPackage } from '@tool/task/generate/generators/jsPackage/jsPackage';
import snakeCase from 'lodash/snakeCase';
import trim from 'lodash/trim';
import { join } from 'path';

const resolveVariable = async ({
  template,
  variable,
  variables,
}: {
  template: string;
  variable: string;
  variables: Record<string, string>;
}): Promise<string> => {
  if (variables[variable]) {
    return variables[variable];
  }
  const isPy = template.endsWith('-py');
  let value: string;
  switch (variable) {
    case '{{PATH}}': {
      const root = await resolveVariable({ template, variable: '{{ROOT}}', variables });
      const target = await resolveVariable({ template, variable: '{{TARGET}}', variables });
      const { path } = await prompt<{ path: string }>([
        { basePath: fromPackages(root, 'src'), key: 'path', type: PROMPT_TYPE.DIRECTORY },
      ]);
      const delimiter = isPy ? '.' : '/';
      value = trim(join(target, path), delimiter);
      break;
    }
    case '{{ROOT}}': {
      value = (
        await prompt<{ root: string }>([
          { key: 'root', options: fileConfig.params().packageDirs, type: PROMPT_TYPE.LIST },
        ])
      ).root;
      break;
    }
    case '{{TARGET}}': {
      const root = await resolveVariable({ template, variable: '{{ROOT}}', variables });
      value = isPy ? snakeCase(root) : `@${root}`;
      break;
    }
    default: {
      value = (await prompt<{ [key: typeof variable]: string }>([{ key: variable }]))[variable];
      break;
    }
  }

  variables[variable] = value;
  return value;
};

const config = defineConfig<GenerateConfigModel>({
  params: () => ({
    generator: {
      'js-package': jsPackage,
    },

    resolveVariable,

    templateDir: fromPackages('tool-task-js/templates'),
  }),
});

export default config;
