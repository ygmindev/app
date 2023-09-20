import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/funding/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/funding/resources/Underwriter/Underwriter.models';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: UNDERWRITER_RESOURCE_NAME })
export class Underwriter extends EntityResource implements UnderwriterModel {
  @withField({ isRepository: true, type: PROPERTY_TYPE.ID })
  id!: string;
}

@withEntity({ name: `${UNDERWRITER_RESOURCE_NAME}Form` })
export class UnderwriterForm implements UnderwriterFormModel {}
