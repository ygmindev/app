import { actionContext } from '@lib/frontend/root/containers/Root/context';
import { type UseActionsModel } from '@lib/frontend/state/hooks/useActions/useActions.models';
import { useContext } from 'react';

export const useActions = (): UseActionsModel => useContext(actionContext);
