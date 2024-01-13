import uniqueId from 'lodash/uniqueId';

import { type _UidModel, type _UidParamsModel } from '@lib-shared/core/utils/uid/_uid.models';

export const _uid = (prefix?: _UidParamsModel): _UidModel => `${prefix ?? 'uid'}-${uniqueId()}`;
