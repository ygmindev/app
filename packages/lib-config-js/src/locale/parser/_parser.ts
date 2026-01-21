import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type _ParserConfigModel,
  type ParserConfigModel,
} from '@lib/config/locale/parser/parser.models';

export const _parser = ({
  distDir,
  languages,
  missingValue,
  patterns,
}: ParserConfigModel): _ParserConfigModel => ({
  extract: {
    defaultValue: missingValue,
    input: patterns,
    output: joinPaths([distDir, '{{language}}/{{namespace}}.json']),
    sort: true,
  },
  locales: languages,
});
