import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';

export const NETWORK_ALERT: AlertDataModel = {
  color: 'error',
  icon: ICON.offline,
  message: 'core:messages.networkError',
};

export const UNKNOWN_ALERT: AlertDataModel = {
  color: 'error',
  icon: ICON.exclamationCircle,
  message: 'core:messages.unknownError',
};

export const SUCCESS_ALERT: AlertDataModel = {
  color: 'success',
  icon: ICON.check,
};
