import { useContext } from 'react';

import { actionContext } from '@lib/frontend/root/containers/Root/Root.base';
import { type UseActionsModel } from '@lib/frontend/state/hooks/useActions/useActions.models';

export const useActions = (): UseActionsModel => useContext(actionContext);
