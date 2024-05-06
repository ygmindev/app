import { type ChildPropsModel } from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type FileModel } from '@lib/shared/data/data.models';

export type _FileInputPropsModel = ChildPropsModel &
  ValuePropsModel<Array<FileModel>> & {
    isMultiple?: boolean;
  };
