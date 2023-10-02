import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { type UserResourceModel } from '#lib-shared/user/resources/UserResource/UserResource.models';

export type DummyUserResourceModel = DummyEntityResourceModel & UserResourceModel;

export type DummyUserResourceFormModel = EntityResourceDataModel<DummyUserResourceModel>;
