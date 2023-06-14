import type {
  _WriteFileModel,
  _WriteFileParamsModel,
} from '#lib-backend/file/utils/writeFile/_writeFile.models';

export interface WriteFileParamsModel extends _WriteFileParamsModel {}

export type WriteFileModel = _WriteFileModel;
