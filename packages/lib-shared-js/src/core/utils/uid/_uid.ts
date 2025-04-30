import { type _UidModel, type _UidParamsModel } from '@lib/shared/core/utils/uid/_uid.models';
import { nanoid } from 'nanoid';

export const _uid = (prefix?: _UidParamsModel): _UidModel =>
  `${prefix ? `${prefix}-` : ''}${nanoid()}`;
