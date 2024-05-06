import { _useQueryContext } from '@lib/frontend/data/hooks/useQueryContext/_useQueryContext';
import { type UseQueryContextModel } from '@lib/frontend/data/hooks/useQueryContext/useQueryContext.models';

export const useQueryContext = (): UseQueryContextModel => _useQueryContext();
