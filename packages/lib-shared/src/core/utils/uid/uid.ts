import { _uid } from '@lib/shared/core/utils/uid/_uid';
import { type UidModel, type UidParamsModel } from '@lib/shared/core/utils/uid/uid.models';

export const uid = (params?: UidParamsModel): UidModel => _uid(params);
