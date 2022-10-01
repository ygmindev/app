import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { _TransPropsModel } from '@lib/frontend/locale/components/Trans/_Trans.models';

export interface TransPropsModel<TParams> extends _TransPropsModel<TParams>, TextPropsModel {}
