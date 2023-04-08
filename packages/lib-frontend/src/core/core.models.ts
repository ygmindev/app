import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ComponentType, FC as _FC, ReactNode, Ref } from 'react';

export interface FCModel<TProps = object>
  extends _FC<TProps & TestIdPropsModel & { nativeID?: string }> {}

export interface SFCModel<TProps = object, TStyle extends StyleModel = ViewStyleModel>
  extends FCModel<TProps & StylePropsModel<TStyle>> {}

export interface RSFCModel<
  TType = undefined,
  TProps = object,
  TStyle extends StyleModel = ViewStyleModel,
> extends SFCModel<TProps & RefPropsModel<TType>, TStyle> {}

export type SFCPropsModel<TProps = object, TStyle extends StyleModel = ViewStyleModel> = PropsModel<
  SFCModel<TProps, TStyle>
>;

export type RSFCPropsModel<
  TType = undefined,
  TProps = object,
  TStyle extends StyleModel = ViewStyleModel,
> = PropsModel<RSFCModel<TType, TProps, TStyle>>;

export type PropsModel<TType> = TType extends ComponentType<infer TProps> ? TProps : never;

export interface RefPropsModel<TType = unknown> {
  ref?: Ref<TType>;
}

export interface ChildrenPropsModel<TType = ReactNode | Array<ReactNode>> {
  children?: TType;
}

export interface ProviderPropsModel<TType = undefined, TChildren = ReactNode | Array<ReactNode>>
  extends ChildrenPropsModel<TChildren> {
  value?: TType;
}

export interface PagePropsModel extends ChildrenPropsModel {}

export interface LayoutPropsModel
  extends Pick<WrapperPropsModel, 'children' | 'isFullWidth' | 'isCenter'> {
  isHorizontalCenter?: boolean;
  isVerticalCenter?: boolean;
}

export type ElementStateModel = `${ELEMENT_STATE}`;

export type DirectionModel = `${DIRECTION}`;

export interface ElementStatePropsModel {
  elementState?: ElementStateModel;
  onElementStateChange?(value?: ElementStateModel): void;
}

export interface ValuePropsModel<TType> {
  defaultValue?: TType;
  onChange?(value: TType): void;
  value?: TType;
}

export interface OptionModel<TType extends string = string>
  extends WithIdModel<TType>,
    Pick<IconPropsModel, 'icon'>,
    Pick<ButtonPropsModel, 'color' | 'onPress' | 'elementState' | 'confirmMessage'> {
  category?: string;
  isDivider?: boolean;
  label?: string;
}

export interface TranslatableOptionModel<TType extends string = string>
  extends Omit<OptionModel<TType>, 'label'> {
  label?: TranslatableTextModel;
}

export interface PositionModel {
  x?: number;
  y?: number;
}

export interface MeasureModel extends PositionModel, DimensionModel {}
