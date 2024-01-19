import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type BrightnessModel } from '@lib/frontend/style/style.models';

export type _StyleProviderPropsModel = ProviderPropsModel<{
  brightness?: BrightnessModel;
}>;
