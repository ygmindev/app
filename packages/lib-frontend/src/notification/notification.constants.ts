import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';

export const UNKNOWN_ALERT: AlertDataModel = {
  color: 'error',
  icon: ICON.exclamationCircle,
  message: 'core:messages.errorUnknown',
};

export const SUCCESS_ALERT: AlertDataModel = {
  color: 'success',
  icon: ICON.check,
};
