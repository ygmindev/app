import { _dateTimeDifference } from '@lib/shared/data/utils/dateTimeDifference/_dateTimeDifference';
import {
type  DateTimeDifferenceModel,
  DateTimeDifferenceParamsModel,
} from '@lib/shared/data/utils/dateTimeDifference/dateTimeDifference.models';

export const dateTimeDifference = ({ ...params }: DateTimeDifferenceParamsModel): DateTimeDifferenceModel => _dateTimeDifference({ ...params });
