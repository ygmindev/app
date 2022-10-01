import type { AlertModel } from '@lib/frontend/notification/components/Alert/Alert.models';

export interface NotificationStateModel {
  alerts: Array<AlertModel>;
}
