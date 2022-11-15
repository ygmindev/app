import type { _UsePreviousParamsModel } from '@lib/frontend/core/hooks/usePrevious/_usePrevious.models';

export interface UsePreviousParamsModel<TType> extends _UsePreviousParamsModel<TType> {
  onChange?(value?: TType): void;
}
