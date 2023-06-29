import { type IConfigItem } from 'generate-template-files';
import { CaseConverterEnum, generateTemplateFilesBatch } from 'generate-template-files';
import map from 'lodash/map';

import {
  type _BoilerplateModel,
  type _BoilerplateParamsModel,
} from '#tool-generate/utils/boilerplate/_boilerplate.models';

export const _boilerplate = async ({
  input,
  output,
  template,
  variables,
}: _BoilerplateParamsModel): _BoilerplateModel =>
  new Promise((resolve) => {
    void generateTemplateFilesBatch([
      {
        defaultCase: CaseConverterEnum.None,
        dynamicReplacers: map(variables, (v, k) => ({ slot: k, slotValue: v })),
        entry: { folderPath: input },
        onComplete: () => resolve(),
        option: template,
        output: { overwrite: true, path: output },
      } as IConfigItem,
    ]);
  });
