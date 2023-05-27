import type {
  _ParserConfigModel,
  ParserConfigModel,
} from '@lib/config/locale/parser/parser.models';
import { join } from 'path';

export const _parser = ({
  languages,
  missingValue,
  namespaceDefault,
  outputPath,
}: ParserConfigModel): _ParserConfigModel => ({
  createOldCatalogs: false,

  defaultNamespace: namespaceDefault,

  defaultValue: missingValue,

  locales: languages,

  output: join(outputPath, '$LOCALE/$NAMESPACE.json'),

  sort: true,

  verbose: true,
});
