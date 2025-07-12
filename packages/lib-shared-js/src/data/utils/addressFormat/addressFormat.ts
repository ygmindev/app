import { _addressFormat } from '@lib/shared/data/utils/addressFormat/_addressFormat';
import {
  type AddressFormatModel,
  type AddressFormatParamsModel,
} from '@lib/shared/data/utils/addressFormat/addressFormat.models';

export const addressFormat = (...params: AddressFormatParamsModel): AddressFormatModel =>
  _addressFormat(...params);
