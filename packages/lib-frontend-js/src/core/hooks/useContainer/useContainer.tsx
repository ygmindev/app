import { _useContainer } from '@lib/frontend/core/hooks/useContainer/_useContainer';
import {
  type UseContainerModel,
  type UseContainerParamsModel,
} from '@lib/frontend/core/hooks/useContainer/useContainer.models';

export const useContainer = <TType,>(
  props: UseContainerParamsModel<TType>,
): UseContainerModel<TType> => _useContainer<TType>(props);
