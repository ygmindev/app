import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type RootContextPropsModel } from '@lib/frontend/root/root.models';

export type RootPropsModel = ChildrenPropsModel & RootContextPropsModel;
