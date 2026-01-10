import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import {
  type ExportModulesModel,
  type ExportModulesParamsModel,
} from '@tool/task/core/utils/exportModules/exportModules.models';

export const exportModules = async ({
  globs,
  outPathname,
  outVariables,
}: ExportModulesParamsModel): Promise<ExportModulesModel> => {
  const pathnames = fromGlobs(globs, { isAbsolute: true });
  const result = pathnames
    .map((v) => `export ${outVariables ? `{ ${outVariables(v).join(', ')} }` : '*'} from '${v}';`)
    .join('\n');
  writeFile({ pathname: outPathname, value: result });
};
