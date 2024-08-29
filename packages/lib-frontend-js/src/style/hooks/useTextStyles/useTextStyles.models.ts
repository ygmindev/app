import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type UseStylesModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { type StylePropsModel, type TextStyleModel } from '@lib/frontend/style/style.models';

export type TextStylePropsModel = StylePropsModel<TextStyleModel> &
  Omit<TextPropsModel, 'children'>;

export type UseTextStylesParamsModel<TType> = { props: TType & TextStylePropsModel };

export type UseTextStylesModel = UseStylesModel<TextStyleModel> & {
  textProps: SFCPropsModel<TextStylePropsModel>;
};
