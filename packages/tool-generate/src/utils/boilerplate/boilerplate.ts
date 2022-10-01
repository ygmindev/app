import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { _boilerplate } from '@tool/generate/utils/boilerplate/_boilerplate';
import { BOILERPLATE_TEMPLATE_VARIABLE_PATTERN } from '@tool/generate/utils/boilerplate/boilerplate.constants';
import type { BoilerplateParamsModel } from '@tool/generate/utils/boilerplate/boilerplate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { readFileSync, statSync } from 'fs';
import { flatten, keys, pullAll, trim, uniq } from 'lodash';
import { basename, join } from 'path';

const _getTemplateVariables = async (templateDir: string): Promise<Array<string>> => {
  const base = basename(templateDir);
  let variables: Array<string> = base.match(BOILERPLATE_TEMPLATE_VARIABLE_PATTERN) || [];
  if (statSync(templateDir).isDirectory()) {
    const paths = children({ from: templateDir, isDirectory: true });
    variables = variables.concat(
      flatten(
        await Promise.all(paths.map(async ({ fullPath }) => _getTemplateVariables(fullPath))),
      ),
    );
  } else {
    const content = readFileSync(templateDir, 'utf8');
    variables = variables.concat(content.match(BOILERPLATE_TEMPLATE_VARIABLE_PATTERN) || []);
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
  let templateVariables = await _getTemplateVariables(templateDir);
  templateVariables = uniq(templateVariables).sort();
  templateVariables = pullAll(templateVariables, keys(variables));

  let _output = output;
  const _variables: Record<string, string> = variables || {};

  const _resolveVariable = async (variable: string): Promise<string> => {
    if (_variables[variable]) {
      return _variables[variable];
    }
    let value: string;
    switch (variable) {
      case '{{PATH}}': {
        const root = await _resolveVariable('{{ROOT}}');
        const target = await _resolveVariable('{{TARGET}}');
        const { path } = await prompt([
          { basePath: fromPackages(root, 'src'), key: 'path', type: PROMPT_TYPE.DIRECTORY },
        ]);
        _output = fromPackages(root, trim(`src/${path}`), '/');
        value = trim(join(target, path), '/');
        break;
      }
      case '{{ROOT}}': {
        value = (await prompt([{ key: 'root', options: packages, type: PROMPT_TYPE.LIST }])).root;
        break;
      }
      case '{{TARGET}}': {
        const root = await _resolveVariable('{{ROOT}}');
        value = `@${root.replace('-', '/')}`;
        break;
      }
      default: {
        value = (await prompt([{ key: variable }]))[variable];
        break;
      }
    }
    _variables[variable] = value;
    return value;
  };

  for (const k of templateVariables) {
    _variables[k] = await _resolveVariable(k);
  }

  _output = _output || fromPackages();
  await _boilerplate({ input: templateDir, output: _output, template, variables: _variables });
  onSuccess && (await onSuccess({ output: _output, template, variables: _variables }));
};
