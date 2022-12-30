import type { UseActionsModel } from '@lib/frontend/state/hooks/useActions/useActions.models';
import { actionContext } from '@lib/frontend/state/providers/StateProvider/StateProvider';
import { useContext } from 'react';

export const useActions = (): UseActionsModel => useContext(actionContext);
