import { _useQueryClient } from '@lib/frontend/data/hooks/useQueryClient/_useQueryClient';
import { type UseQueryClientModel } from '@lib/frontend/data/hooks/useQueryClient/useQueryClient.models';

export const useQueryClient = (): UseQueryClientModel => _useQueryClient();
