import {
  type FileInfoModel,
  type FileInfoParamsModel,
} from '@lib/backend/file/utils/fileInfo/fileInfo.models';
import { basename, dirname, extname } from 'path';

export const fileInfo = (params: FileInfoParamsModel): FileInfoModel => {
  const base = basename(params);
  return {
    dirname: dirname(params),
    extension: extname(params),
    filename: base,
    fullname: basename(params, extname(params)),
    main: base.split('.')[0],
  };
};
