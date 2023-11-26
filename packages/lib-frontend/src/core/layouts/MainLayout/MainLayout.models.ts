import { type ReactNode } from 'react';

import { type ChildrenPropsModel, type SizablePropsModel } from '#lib-frontend/core/core.models';

export type MainLayoutPropsModel = ChildrenPropsModel &
  SizablePropsModel & {
    bottomElement?: ReactNode;
    topElement?: ReactNode;
  };
