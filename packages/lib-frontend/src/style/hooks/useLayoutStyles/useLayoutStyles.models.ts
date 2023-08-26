import { type WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { type UseStylesModel } from '#lib-frontend/style/hooks/useStyles/useStyles.models';
import { type StylePropsModel, type ViewStyleModel } from '#lib-frontend/style/style.models';

export type LayoutPropsModel = StylePropsModel<ViewStyleModel> & WrapperPropsModel;

export type UseLayoutStylesParamsModel<TType> = {
  props: TType & LayoutPropsModel;
};

export type UseLayoutStylesModel = UseStylesModel<ViewStyleModel> & {
  wrapperProps: WrapperPropsModel;
};
