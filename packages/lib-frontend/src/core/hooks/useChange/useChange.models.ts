import type {
  _UseChangeModel,
  _UseChangeParamsModel,
} from '@lib/frontend/core/hooks/useChange/_useChange.models';

export type UseChangeParamsModel<TType> = [
  value: _UseChangeParamsModel<TType>,
  onChange: (previous: TType | undefined) => void,
];

export type UseChangeModel<TType> = _UseChangeModel<TType>;
