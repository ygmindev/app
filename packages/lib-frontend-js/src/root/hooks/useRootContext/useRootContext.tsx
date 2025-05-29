import { _useRootContext } from '@lib/frontend/root/hooks/useRootContext/_useRootContext';
import { type UseRootContextModel } from '@lib/frontend/root/hooks/useRootContext/useRootContext.models';

export const useRootContext = (): UseRootContextModel => _useRootContext();
