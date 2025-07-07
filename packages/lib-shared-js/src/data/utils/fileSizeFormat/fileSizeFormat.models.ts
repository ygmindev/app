import { type FILE_SIZE_UNIT } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat.constants';

export type FileSizeFormatParamsModel = [value: number, options?: FileSizeFormatOptionsModel];

export type FileSizeFormatModel = string;

export type FileSizeFormatOptionsModel = {
  precision?: number;
  unit?: FILE_SIZE_UNIT;
};
