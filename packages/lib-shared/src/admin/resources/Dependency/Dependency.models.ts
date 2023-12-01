import {
  type DEPENDENCY_TYPE,
  type DEPENDENCY_USAGE,
} from '#lib-shared/admin/resources/Dependency/Dependency.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type DependencyModel = EntityResourceModel & {
  description?: string;

  name: string;

  type: DependencyTypeModel;

  usage: DependencyUsageModel;
};

export type DependencyFormModel = EntityResourceDataModel<DependencyModel>;

export type DependencyTypeModel = `${DEPENDENCY_TYPE}`;

export type DependencyUsageModel = `${DEPENDENCY_USAGE}`;
