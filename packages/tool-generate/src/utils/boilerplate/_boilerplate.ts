import type { _BoilerplateParamsModel } from '@tool/generate/utils/boilerplate/_boilerplate.models';
import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum, generateTemplateFilesBatch } from 'generate-template-files';
import { map } from 'lodash';

export const _boilerplate = async ({
  input,
  output,
  template,
  variables,
}: _BoilerplateParamsModel): Promise<void> =>
  new Promise((resolve) =>
    generateTemplateFilesBatch([
      {
        defaultCase: CaseConverterEnum.None,
        dynamicReplacers: map(variables, (v, k) => ({ slot: k, slotValue: v })),
        entry: { folderPath: input },
        onComplete: async () => resolve(),
        option: template,
        output: { overwrite: true, path: output },
      } as IConfigItem,
    ]),
  );
