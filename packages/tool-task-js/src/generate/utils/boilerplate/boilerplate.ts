import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import fileConfig from '@lib/config/file/file';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { _boilerplate } from '@tool/task/generate/utils/boilerplate/_boilerplate';
import { BOILERPLATE_TEMPLATE_VARIABLE_PATTERN } from '@tool/task/generate/utils/boilerplate/boilerplate.constants';
import {
  type BoilerplateModel,
  type BoilerplateParamsModel,
} from '@tool/task/generate/utils/boilerplate/boilerplate.models';
import { readFileSync } from 'fs';
import pullAll from 'lodash/pullAll';
import snakeCase from 'lodash/snakeCase';
import trim from 'lodash/trim';
import uniq from 'lodash/uniq';
import { basename, join } from 'path';

const getTemplateVariables = async (from: string): Promise<Array<string>> => {
  const base = basename(from);
  let variables: Array<string> = base.match(BOILERPLATE_TEMPLATE_VARIABLE_PATTERN) ?? [];
  for (const child of children(from)) {
    if (child.isDirectory) {
      variables = variables.concat((await getTemplateVariables(child.fullPath)).flat());
    } else {
      const content = readFileSync(child.fullPath, 'utf8');
      variables = variables.concat(content.match(BOILERPLATE_TEMPLATE_VARIABLE_PATTERN) ?? []);
    }
  }
  return variables;
};

export const boilerplate = async ({
  onSuccess,
  output,
  template,
  templateDir,
  variables,
}: BoilerplateParamsModel): Promise<BoilerplateModel> => {
  const templateDirF = joinPaths([templateDir, template]);
  let templateVariables = await getTemplateVariables(templateDirF);
  templateVariables = sort(uniq(templateVariables));
  templateVariables = variables
    ? pullAll(templateVariables, Object.keys(variables))
    : templateVariables;

  let outputF = output;
  const variablesF: Record<string, string> = variables ?? {};
  const resolveVariable = async (variable: string): Promise<string> => {
    if (variablesF[variable]) {
      return variablesF[variable];
    }
    const isPy = template.endsWith('-py');
    let value: string;
    switch (variable) {
      case '{{DIRECTORY}}': {
        const root = await resolveVariable('{{ROOT}}');
        const target = await resolveVariable('{{TARGET}}');
        const { path } = await prompt<{ path: string }>([
          { basePath: fromPackages(root, 'src'), key: 'path', type: PROMPT_TYPE.DIRECTORY },
        ]);
        outputF = fromPackages(root, `src/${path}`);
        value = trim(join(target, path), '/');
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
        const root = await resolveVariable('{{ROOT}}');
        value = isPy ? snakeCase(root) : `@${root}`;
        break;
      }
      case '{{PATH}}': {
        const directory = await resolveVariable('{{DIRECTORY}}');
        const target = await resolveVariable('{{TARGET}}');
        value = isPy ? directory.replaceAll('/', '.').replace(`${target}.`, '') : directory;
        break;
      }
      default: {
        value = (await prompt<{ [key: typeof variable]: string }>([{ key: variable }]))[variable];
        break;
      }
    }
    variablesF[variable] = value;
    return value;
  };

  for (const k of templateVariables) {
    variablesF[k] = await resolveVariable(k);
  }

  outputF = outputF || fromPackages();
  const result = await _boilerplate({
    input: templateDirF,
    output: outputF,
    template,
    variables: variablesF,
  });
  onSuccess && (await onSuccess({ output: outputF, template, variables: variablesF }));
  return result;
};
