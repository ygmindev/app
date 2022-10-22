import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _SvgPropsModel extends WithTestIdModel, WithChildrenPropsModel, DimensionModel {}
