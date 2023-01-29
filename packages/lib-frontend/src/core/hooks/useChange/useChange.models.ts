import type {
  _UseChangeModel,
  _UseChangeParamsModel,
} from '@lib/frontend/core/hooks/useChange/_useChange.models';

export interface UseChangeParamsModel<TType> extends _UseChangeParamsModel<TType> {
  onChange?(previous?: TType): void;
}

export type UseChangeModel<TType> = _UseChangeModel<TType>;
