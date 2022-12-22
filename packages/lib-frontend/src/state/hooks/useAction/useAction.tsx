import type { UseActionModel } from '@lib/frontend/state/hooks/useAction/useAction.models';
import { ActionContext } from '@lib/frontend/state/providers/StateProvider/StateProvider';
import { useContext } from 'react';

export const useAction: UseActionModel = () => useContext(ActionContext);
