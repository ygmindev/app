import type { _ParserConfigParamsModel } from '@lib/config/locale/parser/_parser.models';
import { join } from 'path';

export const _parserConfig = ({
  languages,
  missingValue,
  namespaceDefault,
  outputPath,
}: _ParserConfigParamsModel): object => ({
  createOldCatalogs: false,

  defaultNamespace: namespaceDefault,

  defaultValue: missingValue,

  locales: languages,

  output: join(outputPath, '$LOCALE/$NAMESPACE.json'),

  sort: true,

  verbose: true,
});
