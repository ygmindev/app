import type { WithOpenPropsModel } from '@lib/frontend/core/core.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithSubmitPropsModel } from '@lib/frontend/core/decorators/withSubmitProps/withSubmitProps.models';

export interface _FormPropsModel
  extends WithSubmitPropsModel,
    WithOpenPropsModel,
    WithChildrenPropsModel {}
