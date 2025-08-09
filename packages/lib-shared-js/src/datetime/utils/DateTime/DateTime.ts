import { _DateTime } from '@lib/shared/datetime/utils/DateTime/_DateTime';
import {
  type DateTimeModel,
  type DateTimeParamsModel,
} from '@lib/shared/datetime/utils/DateTime/DateTime.models';

export class DateTime extends _DateTime implements DateTimeModel {
  constructor(...params: DateTimeParamsModel) {
    super(...params);
  }
}
