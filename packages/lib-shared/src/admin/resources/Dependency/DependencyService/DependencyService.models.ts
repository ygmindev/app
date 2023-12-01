import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type DependencyServiceModel = EntityResourceServiceModel<
  DependencyModel,
  DependencyFormModel
>;
