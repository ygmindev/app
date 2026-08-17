import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type BadgeablePropsModel = ChildrenPropsModel & {
  badgeElement?: ReactElement;
  isHoverable?: boolean;
};
