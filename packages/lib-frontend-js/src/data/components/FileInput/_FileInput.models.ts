import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type ChildPropsModel } from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type FileModel } from '@lib/shared/data/data.models';
import { type ReactElement } from 'react';

export type _FileInputPropsModel = ValuePropsModel<Array<FileModel>> &
  ChildPropsModel<(isActive?: boolean) => ReactElement<PressablePropsModel>> & {
    isMultiple?: boolean;
  };
