import { join } from 'path';

import {
  type _ParserConfigModel,
  type ParserConfigModel,
} from '#lib-config/locale/parser/parser.models';

export const _parser = ({
  languages,
  missingValue,
  outputPath,
}: ParserConfigModel): _ParserConfigModel => ({
  createOldCatalogs: false,

  defaultValue: missingValue,

  locales: languages,

  output: join(outputPath, '$LOCALE/$NAMESPACE.json'),

  sort: true,

  verbose: true,
});
