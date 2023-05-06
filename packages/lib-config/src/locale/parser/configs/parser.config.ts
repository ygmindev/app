import { _parserConfig } from '@lib/config/locale/parser/_parser.config';
import type { _ParserConfigModel } from '@lib/config/locale/parser/_parser.models';
import { parserConfigParams } from '@lib/config/locale/parser/params/parser.params';

export const parserConfig: _ParserConfigModel = _parserConfig(parserConfigParams);
