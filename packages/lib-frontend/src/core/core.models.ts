import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { FC as _FC } from 'react';

export interface FCModel<TProps = object> extends _FC<TProps> {}

export interface SFCModel<TProps = object> extends FCModel<TProps & WithStyleParamsModel> {}

export interface WithOpenPropsModel {
  isOpen?: boolean;
  onClose?: CallableModel;
}

export interface OptionModel<TType = string> extends WithIconPropsModel, WithIdModel<TType> {
  label?: TranslationTextModel;
}
