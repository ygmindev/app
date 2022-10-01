import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';

export interface UseAlertModel {
  alertAdd(alert: AlertDataModel): void;
  alertRemove(id: string): void;
}
