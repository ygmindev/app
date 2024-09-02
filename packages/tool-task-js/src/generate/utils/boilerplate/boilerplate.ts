import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import generateConfig from '@lib/config/generate/generate';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { _boilerplate } from '@tool/task/generate/utils/boilerplate/_boilerplate';
import { BOILERPLATE_TEMPLATE_VARIABLE_PATTERN } from '@tool/task/generate/utils/boilerplate/boilerplate.constants';
import {
  type BoilerplateModel,
  type BoilerplateParamsModel,
} from '@tool/task/generate/utils/boilerplate/boilerplate.models';
import { readFileSync } from 'fs';
import pullAll from 'lodash/pullAll';
import uniq from 'lodash/uniq';
import { basename } from 'path';

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

  for (const k of templateVariables) {
    variablesF[k] = await generateConfig
      .params()
      .resolveVariable({ template, variable: k, variables: variablesF });
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
