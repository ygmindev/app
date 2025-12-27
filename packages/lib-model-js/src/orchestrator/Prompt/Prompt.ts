import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PROMPT_RESOURCE_NAME } from '@lib/model/orchestrator/Prompt/Prompt.constants';
import { Option } from '@lib/model/resource/Option/Option';
import { OptionModel } from '@lib/model/resource/Option/Option.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

@withEntity({ name: PROMPT_RESOURCE_NAME })
export class Prompt {
  @withField({ isOptional: true })
  basePath?: string;

  @withField({ isArray: true, isOptional: true })
  defaultValue?: Array<string>;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isOptional?: boolean;

  @withField()
  key!: string;

  @withField({ isOptional: true })
  message?: string;

  @withField({ Resource: () => Option, isArray: true, isOptional: true })
  options?: Array<OptionModel>;

  @withField({ isOptional: true })
  type?: PROMPT_TYPE.CONFIRM;
}
