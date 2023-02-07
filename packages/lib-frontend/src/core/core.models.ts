import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
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

export type PropsModel<TType> = TType extends ComponentType<infer TProps> ? TProps : never;

export interface RefPropsModel<TType = unknown> {
  ref?: Ref<TType>;
}

export interface ChildrenPropsModel<TType = ReactNode | Array<ReactNode>> {
  children?: TType;
}

export interface ProviderPropsModel<TType = undefined> extends ChildrenPropsModel {
  value?: TType;
}

export interface PagePropsModel {}

export interface LayoutPropsModel extends ChildrenPropsModel {}

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

export interface FieldPropsModel<TType extends string = string>
  extends Pick<IconPropsModel, 'icon'>,
    ElementStatePropsModel,
    ValuePropsModel<TType> {
  error?: string | boolean;
  isAutoFocus?: boolean;
  label?: string;
}

export interface OptionModel
  extends WithIdModel,
    Pick<IconPropsModel, 'icon'>,
    Pick<ButtonPropsModel, 'color' | 'onPress' | 'elementState' | 'confirmMessage'> {
  category?: string;
  isDivider?: boolean;
  label?: string;
}

export interface PositionModel {
  x: number;
  y: number;
}

export interface MeasureModel extends PositionModel, DimensionModel {}
