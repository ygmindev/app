import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ComponentType, FC as _FC, ReactNode, RefObject } from 'react';

export interface FCModel<TProps = object> extends _FC<TProps & TestIdPropsModel> {}

export interface SFCModel<TProps = object>
  extends FCModel<TProps & StylePropsModel & TestIdPropsModel> {}

export type PropsModel<TType> = TType extends ComponentType<infer TProps> ? TProps : never;

export interface ChildrenPropsModel<TType = ReactNode | Array<ReactNode>> {
  children?: TType;
}

export interface ProviderPropsModel<TType = undefined> extends ChildrenPropsModel {
  value?: TType;
}

export interface StylePropsModel {
  style?: StyleModel | Array<StyleModel>;
}

export interface PagePropsModel extends Pick<RootPropsModel, 'initialState'> {}

export interface LayoutPropsModel extends ChildrenPropsModel {}

export interface FieldPropsModel<TType extends string = string>
  extends Pick<IconPropsModel, 'icon'> {
  defaultValue?: TType;
  error?: boolean | TranslatableTextModel;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  label?: TranslatableTextModel;
  onChange?(value: TType): void;
  value?: TType;
}

export interface OptionModel
  extends WithIdModel,
    Pick<IconPropsModel, 'icon'>,
    Pick<ButtonPropsModel, 'color' | 'onPress' | 'isDisabled' | 'confirmMessage'> {
  isDivider?: boolean;
  label?: TranslatableTextModel;
}

export interface ForwardedRefPropsModel<TType = unknown> {
  forwardedRef?: RefObject<TType>;
}
