import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _IconPropsModel extends WithStyleParamsModel, WithIconModel, WithTestIdModel {}
