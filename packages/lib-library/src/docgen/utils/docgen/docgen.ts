import { _docgen } from '@lib/library/docgen/utils/docgen/_docgen';
import {
  type DocgenModel,
  type DocgenParamsModel,
} from '@lib/library/docgen/utils/docgen/docgen.models';

export const docgen = (params: DocgenParamsModel): DocgenModel => _docgen(params);
