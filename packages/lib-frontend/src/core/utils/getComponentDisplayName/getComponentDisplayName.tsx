import isString from 'lodash/isString';
import { type ComponentType } from 'react';

import {
  type GetComponentDisplayNameModel,
  type GetComponentDisplayNameParamsModel,
} from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName.models';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const getComponentDisplayName = (
  params: GetComponentDisplayNameParamsModel,
): GetComponentDisplayNameModel =>
  isString(params)
    ? params
    : (params as ComponentType).displayName || (params as ComponentType).name || uid('library');
