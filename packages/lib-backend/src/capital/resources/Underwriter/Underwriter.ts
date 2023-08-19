import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/capital/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/capital/resources/Underwriter/Underwriter.models';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

@withEntity({ isRepository: true, name: UNDERWRITER_RESOURCE_NAME })
export class Underwriter extends EntityResource implements UnderwriterModel {
  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${UNDERWRITER_RESOURCE_NAME}Form` })
export class UnderwriterForm implements UnderwriterFormModel {
  @withField({ type: FIELD_TYPE.STRING })
  name!: string;
}
