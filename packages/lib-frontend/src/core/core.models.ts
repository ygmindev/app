import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ComponentType, FC as _FC } from 'react';

export interface FCModel<TProps = object> extends _FC<TProps & WithTestIdModel> {}

export interface SFCModel<TProps = object>
  extends FCModel<TProps & WithStyleModel & WithTestIdModel> {}

export type PropsModel<TType> = TType extends ComponentType<infer TProps> ? TProps : never;

export interface ProviderPropsModel<TType = undefined> extends WithChildrenPropsModel {
  value?: TType;
}

export interface PagePropsModel extends Pick<RootPropsModel, 'initialState'> {}

export interface LayoutPropsModel extends WithChildrenPropsModel {}

export interface OptionModel<TType = string>
  extends WithIdModel<TType>,
    Pick<IconPropsModel, 'icon'> {
  label?: TranslatableTextModel;
}
