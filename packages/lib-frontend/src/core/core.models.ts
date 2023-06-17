import type { ComponentType, FC as _FC, ReactNode, Ref } from 'react';

import type { ButtonPropsModel } from '#lib-frontend/core/components/Button/Button.models';
import type { IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import type { WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import type { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '#lib-frontend/style/style.models';
import type { TestIdPropsModel } from '#lib-frontend/test/test.models';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type FCModel<TProps = object> = _FC<TProps & TestIdPropsModel & { nativeID?: string }>;

export type SFCModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = FCModel<
  TProps & StylePropsModel<TStyle>
>;

export type RSFCModel<
  TType = undefined,
  TProps = object,
  TStyle extends StyleModel = ViewStyleModel,
> = SFCModel<TProps & RefPropsModel<TType>, TStyle>;

export type SFCPropsModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = PropsModel<
  SFCModel<TProps, TStyle>
>;

export type FCPropsModel<TProps = object> = PropsModel<FCModel<TProps>>;

export type RSFCPropsModel<
  TType = undefined,
  TProps = object,
  TStyle extends StyleModel = ViewStyleModel,
> = PropsModel<RSFCModel<TType, TProps, TStyle>>;

export type PropsModel<TType> = TType extends ComponentType<infer TProps> ? TProps : never;

export type RefPropsModel<TType = unknown> = {
  ref?: Ref<TType>;
};

export type ChildrenPropsModel<TType = ReactNode | Array<ReactNode>> = ChildPropsModel<TType>;

export type ChildPropsModel<TType = ReactNode> = {
  children?: TType;
};

export type ProviderPropsModel<TType = undefined, TChildren = ReactNode | Array<ReactNode>> = {
  value?: TType;
} & ChildrenPropsModel<TChildren>;

export type PagePropsModel = ChildrenPropsModel;

export type LayoutPropsModel = {
  isHorizontalCenter?: boolean;
  isVerticalCenter?: boolean;
} & Pick<WrapperPropsModel, 'children' | 'isFullWidth' | 'isCenter'>;

export type ElementStateModel = `${ELEMENT_STATE}`;

export type DirectionModel = `${DIRECTION}`;

export type ElementStatePropsModel = {
  elementState?: ElementStateModel;
  onElementStateChange?(value?: ElementStateModel): void;
};

export type ValuePropsModel<TType> = {
  defaultValue?: TType;
  onChange?(value: TType): void;
  value?: TType;
};

export type OptionModel<TType extends string = string> = {
  category?: string;
  isDivider?: boolean;
  label?: string;
} & WithIdModel<TType> &
  Pick<IconPropsModel, 'icon'> &
  Pick<ButtonPropsModel, 'color' | 'onPress' | 'elementState' | 'confirmMessage'>;

export type TranslatableOptionModel<TType extends string = string> = {
  label?: TranslatableTextModel;
} & Omit<OptionModel<TType>, 'label'>;

export type PositionModel = {
  x?: number;
  y?: number;
};

export type DimensionModel = {
  height?: number;
  width?: number;
};

export type MeasureModel = PositionModel & DimensionModel;
