import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DEPENDENCY_RESOURCE_NAME } from '#lib-shared/admin/resources/Dependency/Dependency.constants';
import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: DEPENDENCY_RESOURCE_NAME })
export class Dependency extends EntityResource implements DependencyModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${DEPENDENCY_RESOURCE_NAME}Form` })
export class DependencyForm implements DependencyFormModel {}
