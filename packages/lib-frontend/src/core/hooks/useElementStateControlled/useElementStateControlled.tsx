import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type UseElementStateControlledModel,
  type UseElementStateControlledParamsModel,
} from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';

export const useElementStateControlled = ({
  defaultElementState = ELEMENT_STATE.INACTIVE,
  elementState,
  onElementStateChange,
}: UseElementStateControlledParamsModel): UseElementStateControlledModel => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue: defaultElementState,
    onChange: onElementStateChange,
    value: elementState,
  });
  const isLoading = valueControlled === ELEMENT_STATE.LOADING;
  return {
    elementStateControlled: valueControlled,
    elementStateControlledSet: valueControlledSet,
    isActive: valueControlled === ELEMENT_STATE.ACTIVE,
    isBlocked: isLoading || valueControlled === ELEMENT_STATE.DISABLED,
    isLoading,
  };
};
