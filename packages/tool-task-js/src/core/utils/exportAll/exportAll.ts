import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import {
  type ExportAllModel,
  type ExportAllParamsModel,
} from '@tool/task/core/utils/exportAll/exportAll.models';

export const exportAll = async ({
  globs,
  outPathname,
}: ExportAllParamsModel): Promise<ExportAllModel> => {
  const pathnames = fromGlobs(globs, { isAbsolute: true });
  const result = pathnames.map((v) => `export * from '${v}';`).join('\n');
  writeFile({ filename: outPathname, value: result });
};
