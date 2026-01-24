import {
  type _BoilerplateModel,
  type _BoilerplateParamsModel,
} from '@tool/task/generate/utils/boilerplate/_boilerplate.models';
import { type IConfigItem } from 'generate-template-files';
import { CaseConverterEnum, generateTemplateFilesBatch } from 'generate-template-files';
import map from 'lodash/map';

export const _boilerplate = async ({
  outPathname,
  template,
  templatePathname,
  variables,
}: _BoilerplateParamsModel): Promise<_BoilerplateModel> =>
  new Promise((resolve) => {
    void generateTemplateFilesBatch([
      {
        defaultCase: CaseConverterEnum.None,
        dynamicReplacers: map(variables, (v, k) => ({ slot: k, slotValue: v })),
        entry: { folderPath: templatePathname },
        onComplete: (result) => resolve(result.output.files),
        option: template,
        output: { overwrite: true, path: outPathname },
      } as IConfigItem,
    ]);
  });
