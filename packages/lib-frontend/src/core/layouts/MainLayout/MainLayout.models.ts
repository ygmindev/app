import { type ChildrenPropsModel, type SizablePropsModel } from '@lib/frontend/core/core.models';
import { type ReactNode } from 'react';

export type MainLayoutPropsModel = ChildrenPropsModel &
  SizablePropsModel & {
    bottomElement?: ReactNode;
    topElement?: ReactNode;
  };
