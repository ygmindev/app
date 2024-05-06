import { type _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import { type TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type TextStylerParamsModel } from '@lib/frontend/style/utils/styler/textStyler/textStyler.models';

export type TextPropsModel = _TextPropsModel & TextStylerParamsModel;

export type TextCasingModel = `${TEXT_CASING}`;
