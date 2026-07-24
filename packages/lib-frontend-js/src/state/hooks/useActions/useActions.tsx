import { ActionContext } from '@lib/frontend/root/containers/Root/context';
import { type UseActionsModel } from '@lib/frontend/state/hooks/useActions/useActions.models';
import { UninitializedError } from '@lib/shared/core/errors/UninitializedError/UninitializedError';
import { useContext } from 'react';

export const useActions = (): UseActionsModel => {
  const actions = useContext(ActionContext);
  if (!actions) throw new UninitializedError('actions');
  return actions;
};
