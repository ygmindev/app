import { type ComponentType, type FC as _FC, type ReactNode, type Ref } from 'react';

import { type ButtonPropsModel } from '#lib-frontend/core/components/Button/Button.models';
import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type CORNER, type DIRECTION, type ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type LayoutPropsModel } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import {
  type StyleModel,
  type StylePropsModel,
  type ViewStyleModel,
} from '#lib-frontend/style/style.models';
import { type TestIdPropsModel } from '#lib-frontend/test/test.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FCModel<TProps = object> = _FC<TProps & TestIdPropsModel & { nativeID?: string }>;

export type SFCPropsModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = PropsModel<
  SFCModel<TProps, TStyle>
>;

export type SFCModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = FCModel<
  TProps & StylePropsModel<TStyle>
>;

export type LFCPropsModel<TProps = object> = PropsModel<LFCModel<TProps>>;

export type LFCModel<TProps = object> = FCModel<TProps & LayoutPropsModel>;

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

export type PagePropsModel<TType = undefined> = LayoutPropsModel &
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
    isDivider?: boolean;
    label?: string;
  };

export type TranslatableOptionModel<TType extends string = string> = Omit<
  OptionModel<TType>,
  'label'
> & { label?: TranslatableTextModel };

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
