import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import {
  type DummyUserResourceFormModel,
  type DummyUserResourceModel,
} from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.models';

export type DummyUserResourceServiceModel = EntityResourceServiceModel<
  DummyUserResourceModel,
  DummyUserResourceFormModel
>;
