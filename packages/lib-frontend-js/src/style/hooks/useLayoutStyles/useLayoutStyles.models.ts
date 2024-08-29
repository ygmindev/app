import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { type UseStylesModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { type StylePropsModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export type LayoutStylePropsModel = StylePropsModel<ViewStyleModel> &
  Omit<WrapperPropsModel, 'children'>;

export type UseLayoutStylesParamsModel<TType> = { props: TType & LayoutStylePropsModel };

export type UseLayoutStylesModel = UseStylesModel<ViewStyleModel> & {
  wrapperProps: LFCPropsModel<WrapperPropsModel>;
};
