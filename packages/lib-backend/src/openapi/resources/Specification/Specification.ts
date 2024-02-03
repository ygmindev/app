import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SPECIFICATION_RESOURCE_NAME } from '@lib/shared/openapi/resources/Specification/Specification.constants';
import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: SPECIFICATION_RESOURCE_NAME })
export class Specification extends EntityResource implements SpecificationModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${SPECIFICATION_RESOURCE_NAME}Form` })
export class SpecificationForm implements SpecificationFormModel {}
