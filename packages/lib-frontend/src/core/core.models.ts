import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { FC as _FC } from 'react';

export interface FCModel<TProps = object> extends _FC<TProps> {}

export interface SFCModel<TProps = object> extends FCModel<TProps & WithStyleModel> {}

export interface ProviderPropsModel<TType = undefined>
  extends WithTestIdModel,
    WithChildrenPropsModel {
  value?: TType;
}

export interface PagePropsModel extends WithTestIdModel, Pick<RootPropsModel, 'initialState'> {}

export interface WithOpenPropsModel {
  isOpen?: boolean;
  onClose?: CallableModel;
}

export interface OptionModel<TType = string> extends WithIconPropsModel, WithIdModel<TType> {
  label?: TranslationTextModel;
}
