import {
  type _DateTimeFormatModel,
  type _DateTimeFormatParamsModel,
} from '@lib/shared/data/utils/dateTimeFormat/_dateTimeFormat.models';
import { type DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';

export type DateTimeFormatTypeModel = `${DATE_TIME_FORMAT_TYPE}`;

export type DateTimeFormatParamsModel = _DateTimeFormatParamsModel;

export type DateTimeFormatModel = _DateTimeFormatModel;
