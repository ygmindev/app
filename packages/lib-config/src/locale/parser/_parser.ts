import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type _ParserConfigModel,
  type ParserConfigModel,
} from '@lib/config/locale/parser/parser.models';

export const _parser = ({
  distDir,
  languages,
  missingValue,
}: ParserConfigModel): _ParserConfigModel => ({
  createOldCatalogs: false,

  defaultValue: missingValue,

  locales: languages,

  output: joinPaths([distDir, '$LOCALE/$NAMESPACE.json']),

  sort: true,

  verbose: true,
});
