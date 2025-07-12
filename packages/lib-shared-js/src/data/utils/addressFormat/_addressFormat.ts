import addressFormatter from '@fragaria/address-formatter';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import {
  type _AddressFormatModel,
  type _AddressFormatParamsModel,
} from '@lib/shared/data/utils/addressFormat/_addressFormat.models';
import trim from 'lodash/trim';

export const _addressFormat = (
  ...[
    { address1, address2, city, country, countryCode, postalCode, province },
    options,
  ]: _AddressFormatParamsModel
): _AddressFormatModel => {
  const value = trim(
    addressFormatter.format(
      {
        city,
        country: options?.isCountry ? country : undefined,
        countryCode,
        postcode: postalCode,
        province,
        streetName: filterNil([address1, address2]).join(' '),
      },
      { abbreviate: options?.isCompact ?? true, appendCountry: options?.isCountry ?? false },
    ),
    '\n',
  );
  return options?.isNewline ? value : value.replaceAll('\n', ', ');
};
