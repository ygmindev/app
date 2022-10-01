import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface AppLayoutPropsModel extends WithTestIdModel, WithChildrenPropsModel {}
