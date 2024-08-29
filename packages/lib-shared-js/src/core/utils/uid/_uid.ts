import { type _UidModel, type _UidParamsModel } from '@lib/shared/core/utils/uid/_uid.models';
import uniqueId from 'lodash/uniqueId';

export const _uid = (prefix?: _UidParamsModel): _UidModel => `${prefix ?? 'uid'}-${uniqueId()}`;
