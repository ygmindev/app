import {
  type _AddressFormatModel,
  type _AddressFormatParamsModel,
} from '@lib/shared/data/utils/addressFormat/_addressFormat.models';

export type AddressFormatParamsModel = _AddressFormatParamsModel;

export type AddressFormatModel = _AddressFormatModel;

export type AddressFormatOptionsModel = {
  isCompact?: boolean;
  isCountry?: boolean;
  isNewline?: boolean;
};
