import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type ChildPropsModel } from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { type FileModel } from '@lib/shared/data/data.models';
import { type ReactElement } from 'react';

export type _FileInputPropsModel = ValuePropsModel<Array<FileModel>> &
  ChildPropsModel<(isActive?: boolean) => ReactElement<PressablePropsModel>> & {
    isButton?: boolean;
    isMultiple?: boolean;
    onPresignMany?(
      params: Array<Partial<StorageModel>>,
    ): Promise<Array<Partial<StorageModel> | null>>;
  };

export type _FileInputRefModel = {
  open?(): void;
};
