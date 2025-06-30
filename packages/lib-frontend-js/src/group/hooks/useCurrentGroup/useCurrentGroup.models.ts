import { type PartialModel } from '@lib/shared/core/core.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export type UseCurrentGroupModel = PartialModel<GroupModel> | null | undefined;
