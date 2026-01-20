import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { EXTENSIONS_BASE } from '@lib/config/file/file.constants';
import {
  type _ParserConfigModel,
  type ParserConfigModel,
} from '@lib/config/locale/parser/parser.models';

export const _parser = ({
  distDir,
  languages,
  missingValue,
}: ParserConfigModel): _ParserConfigModel => ({
  extract: {
    defaultValue: missingValue,
    input: [`src/**/*.{${EXTENSIONS_BASE.join(',')}}`],
    output: joinPaths([distDir, '{{language}}/{{namespace}}.json']),
    sort: true,
  },

  locales: languages,
});
