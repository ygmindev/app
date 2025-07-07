import { FILE_SIZE_UNIT } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat.constants';
import {
  type FileSizeFormatModel,
  type FileSizeFormatParamsModel,
} from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat.models';

const UNITS = [
  FILE_SIZE_UNIT.B,
  FILE_SIZE_UNIT.KB,
  FILE_SIZE_UNIT.MB,
  FILE_SIZE_UNIT.GB,
  FILE_SIZE_UNIT.TB,
  FILE_SIZE_UNIT.PB,
];

export const fileSizeFormat = (
  ...[value, options]: FileSizeFormatParamsModel
): FileSizeFormatModel => {
  if (value === 0) {
    return '0 B';
  }
  const precision = options?.precision ?? 2;
  const i = options?.unit
    ? UNITS.findIndex((v) => v === options.unit)
    : Math.floor(Math.log(value) / Math.log(1024));
  const size = value / Math.pow(1024, i);
  return `${parseFloat(size.toFixed(precision))} ${UNITS[i]}`;
};
