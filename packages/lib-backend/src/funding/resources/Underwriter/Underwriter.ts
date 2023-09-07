import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/funding/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/funding/resources/Underwriter/Underwriter.models';

@withEntity({ isRepository: true, name: UNDERWRITER_RESOURCE_NAME })
export class Underwriter extends EntityResource implements UnderwriterModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${UNDERWRITER_RESOURCE_NAME}Form` })
export class UnderwriterForm implements UnderwriterFormModel {
  @withField({ type: DATA_TYPE.STRING })
  name!: string;
}