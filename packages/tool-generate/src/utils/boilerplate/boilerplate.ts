import { readFileSync } from 'fs';
import pullAll from 'lodash/pullAll';
import trim from 'lodash/trim';
import uniq from 'lodash/uniq';
import { basename, join } from 'path';

import { children } from '#lib-backend/file/utils/children/children';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { packages } from '#lib-backend/file/utils/packages/packages';
import { _boilerplate } from '#tool-generate/utils/boilerplate/_boilerplate';
import { BOILERPLATE_TEMPLATE_VARIABLE_PATTERN } from '#tool-generate/utils/boilerplate/boilerplate.constants';
import { type BoilerplateParamsModel } from '#tool-generate/utils/boilerplate/boilerplate.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';

const getTemplateVariables = async (from: string): Promise<Array<string>> => {
  const base = basename(from);
  let variables: Array<string> = base.match(BOILERPLATE_TEMPLATE_VARIABLE_PATTERN) || [];

  for (const child of children(from)) {
    if (child.isDirectory) {
      variables = variables.concat((await getTemplateVariables(child.fullPath)).flat());
    } else {
      const content = readFileSync(child.fullPath, 'utf8');
      variables = variables.concat(content.match(BOILERPLATE_TEMPLATE_VARIABLE_PATTERN) || []);
    }
  }

  return variables;
};

export const boilerplate = async ({
  onSuccess,
  output,
  template,
  variables,
}: BoilerplateParamsModel): Promise<void> => {
  const templateDir = fromPackages('tool-generate/templates', template);
  let templateVariables = await getTemplateVariables(templateDir);
  templateVariables = uniq(templateVariables).sort();
  templateVariables = variables
    ? pullAll(templateVariables, Object.keys(variables))
    : templateVariables;

  let outputF = output;
  const variablesF: Record<string, string> = variables || {};
  const resolveVariable = async (variable: string): Promise<string> => {
    if (variablesF[variable]) {
      return variablesF[variable];
    }
    let value: string;
    switch (variable) {
      case '{{PATH}}': {
        const root = await resolveVariable('{{ROOT}}');
        const target = await resolveVariable('{{TARGET}}');
        const { path } = await prompt([
          { basePath: fromPackages(root, 'src'), key: 'path', type: PROMPT_TYPE.DIRECTORY },
        ]);
        outputF = fromPackages(root, trim(`src/${path}`), '/');
        value = trim(join(target, path), '/');
        break;
      }
      case '{{ROOT}}': {
        value = (await prompt([{ key: 'root', options: packages, type: PROMPT_TYPE.LIST }])).root;
        break;
      }
      case '{{TARGET}}': {
        const root = await resolveVariable('{{ROOT}}');
        value = `#${root}`;
        break;
      }
      default: {
        value = (await prompt([{ key: variable }]))[variable];
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
  await _boilerplate({ input: templateDir, output: outputF, template, variables: variablesF });
  onSuccess && (await onSuccess({ output: outputF, template, variables: variablesF }));
};
