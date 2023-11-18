import { type ReactElement } from 'react';

import { type ChildrenPropsModel, type SizablePropsModel } from '#lib-frontend/core/core.models';

export type MainLayoutPropsModel = ChildrenPropsModel &
  SizablePropsModel & {
    bottomElement?: ReactElement;
    isFullHeight?: boolean;
    topElement?: ReactElement;
  };
