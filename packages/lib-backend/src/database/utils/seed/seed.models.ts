import type { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceFormModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';
import type { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel } from '@lib/shared/user/resources/User/User.models';

export interface SeedParamsModel {
  names?: Array<keyof SeedDataModel>;
}

export type SeedDataModel = Record<
  typeof DUMMY_ENTITY_RESOURCE_RESOURCE_NAME | typeof USER_RESOURCE_NAME,
  Array<DummyEntityResourceFormModel | UserFormModel>
>;
