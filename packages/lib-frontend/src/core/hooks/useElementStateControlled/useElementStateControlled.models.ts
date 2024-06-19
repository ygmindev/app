import { type ElementStateModel } from '@lib/frontend/core/core.models';
import {
  type UseValueControlledModel,
  type UseValueControlledParamsModel,
} from '@lib/frontend/data/hooks/useValueControlled/useValueControlled.models';

export type UseElementStateControlledParamsModel = {
  defaultElementState?: UseValueControlledParamsModel<ElementStateModel>['defaultValue'];
  elementState: UseValueControlledParamsModel<ElementStateModel>['value'];
  onElementStateChange: UseValueControlledParamsModel<ElementStateModel>['onChange'];
};

export type UseElementStateControlledModel = {
  elementStateControlled: UseValueControlledModel<ElementStateModel>['valueControlled'];
  elementStateControlledSet: UseValueControlledModel<ElementStateModel>['valueControlledSet'];
  isActive: boolean;
  isBlocked: boolean;
  isLoading: boolean;
};
