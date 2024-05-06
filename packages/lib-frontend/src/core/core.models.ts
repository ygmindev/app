import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type CORNER, type DIRECTION, type ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import { type LayoutStylePropsModel } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { type TextStylePropsModel } from '@lib/frontend/style/hooks/useTextStyles/useTextStyles.models';
import {
  type StyleModel,
  type StylePropsModel,
  type ThemeSizeModel,
  type ThemeSizeMoreModel,
  type ViewStyleModel,
} from '@lib/frontend/style/style.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ComponentType, type FC as _FC, type ReactNode, type Ref } from 'react';

export type NamableComponentModel<TType> = TType & { displayName?: string };

export type FCModel<TProps = object> = _FC<TProps & TestIdPropsModel & { nativeID?: string }>;

export type FCPropsModel<TProps = object> = PropsModel<FCModel<TProps>>;

export type SFCPropsModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = PropsModel<
  SFCModel<TProps, TStyle>
>;

export type SFCModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = FCModel<
  TProps & StylePropsModel<TStyle>
>;

export type LFCPropsModel<TProps = object> = PropsModel<LFCModel<TProps>>;

export type LFCModel<TProps = object> = FCModel<TProps & LayoutStylePropsModel>;

export type TFCModel<TProps = object> = FCModel<TProps & TextStylePropsModel>;

export type RSFCPropsModel<
  TType = undefined,
  TProps = object,
  TStyle extends StyleModel = ViewStyleModel,
> = PropsModel<RSFCModel<TType, TProps, TStyle>>;

export type RSFCModel<
  TType = undefined,
  TProps = object,
  TStyle extends StyleModel = ViewStyleModel,
> = SFCModel<TProps & RefPropsModel<TType>, TStyle>;

export type RLFCPropsModel<TType = undefined, TProps = object> = PropsModel<
  RLFCModel<TType, TProps>
>;

export type RLFCModel<TType = undefined, TProps = object> = LFCModel<TProps & RefPropsModel<TType>>;

export type RTFCModel<TType = undefined, TProps = object> = TFCModel<TProps & RefPropsModel<TType>>;

export type PropsModel<TType> = TType extends ComponentType<infer TProps> ? TProps : never;

export type RefPropsModel<TType = unknown> = {
  ref?: Ref<TType>;
};

export type ChildrenPropsModel<TType = ReactNode | Array<ReactNode>> = ChildPropsModel<TType>;

export type ChildPropsModel<TType = ReactNode> = {
  children?: TType | null;
};

export type ProviderPropsModel<TType = undefined, TChildren = ReactNode | Array<ReactNode>> = {
  value?: TType;
} & ChildrenPropsModel<TChildren>;

export type PagePropsModel<TType = undefined> = LayoutStylePropsModel &
  ChildrenPropsModel & { pageProps?: TType };

export type ElementStateModel = `${ELEMENT_STATE}`;

export type DirectionModel = `${DIRECTION}`;

export type ElementStatePropsModel = {
  elementState?: ElementStateModel;
  onElementStateChange?(value?: ElementStateModel): void;
};

export type OptionModel<TType extends string = string> = WithIdModel<TType> &
  WithIconPropsModel &
  Pick<ButtonPropsModel, 'color' | 'onPress' | 'elementState' | 'confirmMessage'> & {
    category?: string;
    image?: string;
    label?: string;
  };

export type TranslatableOptionModel<TType extends string = string> = Omit<
  OptionModel<TType>,
  'label'
> & { label?: AsyncTextModel };

export type PositionModel = {
  x?: number;
  y?: number;
};

export type DimensionModel = {
  height?: number;
  width?: number;
};

export type CornerModel = `${CORNER}`;

export type MeasureModel = PositionModel & DimensionModel;

export type SizablePropsModel = {
  size?: ThemeSizeModel | number;
};

export type SizableMorePropsModel = {
  size?: ThemeSizeModel | ThemeSizeMoreModel | number;
};

export type AsyncTextModel = string | ((params: Pick<UseTranslationModel, 't'>) => string);
