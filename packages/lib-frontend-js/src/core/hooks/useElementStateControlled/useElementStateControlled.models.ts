import { type ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type UseValueControlledModel,
  type UseValueControlledParamsModel,
} from '@lib/frontend/data/hooks/useValueControlled/useValueControlled.models';

export type UseElementStateControlledParamsModel = {
  defaultElementState?: UseValueControlledParamsModel<ELEMENT_STATE>['defaultValue'];
  elementState: UseValueControlledParamsModel<ELEMENT_STATE>['value'];
  onElementStateChange: UseValueControlledParamsModel<ELEMENT_STATE>['onChange'];
};

export type UseElementStateControlledModel = {
  elementStateControlled: UseValueControlledModel<ELEMENT_STATE>['valueControlled'];
  elementStateControlledSet: UseValueControlledModel<ELEMENT_STATE>['valueControlledSet'];
  isActive: boolean;
  isBlocked: boolean;
  isLoading: boolean;
};
