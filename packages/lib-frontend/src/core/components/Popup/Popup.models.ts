import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';

export interface PopupRefModel {
  open(uri: string): void;
}

export interface PopupPropsModel<TParams = void>
  extends DimensionModel,
    WithForwardedRefPropsModel<PopupRefModel> {
  onClose?(params?: TParams): void;
}
