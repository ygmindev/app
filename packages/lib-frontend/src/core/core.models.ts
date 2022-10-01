import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { FC as _FC } from 'react';

export interface FCModel<TProps = object> extends _FC<TProps> {}

export interface SFCModel<TProps = object> extends FCModel<TProps & WithStyleParamsModel> {}

export interface WithOpenPropsModel {
  closeLabel?: TranslationTextModel;
  isOpen?: boolean;
  onClose?: CallableModel;
}

export interface OptionModel<TType = string> extends WithIconModel, WithIdModel<TType> {
  label?: TranslationTextModel;
}
