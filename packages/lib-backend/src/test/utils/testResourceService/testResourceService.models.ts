import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { type TestableResourceModel } from '#lib-shared/test/resources/TestableResource/TestableResource.models';

export type TestResourceServiceParamsModel<TType extends TestableResourceModel> = {
  form: EntityResourceDataModel<TType>;
  getService(): EntityResourceServiceModel<TType>;
};

export type TestableResourceServiceModel<TType extends TestableResourceModel> =
  EntityResourceServiceModel<TType>;
