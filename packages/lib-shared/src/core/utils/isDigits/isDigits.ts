import type {
  IsDigitModel,
  IsDigitParamsModel,
} from '#lib-shared/core/utils/isDigits/isDigits.models';

export const isDigits = (params: IsDigitParamsModel): IsDigitModel =>
  params.match(/^-?\d+$/) !== null;
