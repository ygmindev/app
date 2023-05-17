import type {
  _ParserConfigModel,
} from '@lib/config/locale/parser/_parser.models';
import parserConfig from '@lib/config/locale/parser/parser';
import { join } from 'path';

export const _parserConfig: _ParserConfigModel = {
  createOldCatalogs: false,

  defaultNamespace: parserConfig.namespaceDefault,

  defaultValue: parserConfig.missingValue,

  locales: parserConfig.languages,

  output: join(parserConfig.outputPath, '$LOCALE/$NAMESPACE.json'),

  sort: true,

  verbose: true,
};
