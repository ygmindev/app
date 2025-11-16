import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { EXECUTION_CONTEXT_RESOURCE_NAME } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.constants';
import { ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';

@withEntity({ name: EXECUTION_CONTEXT_RESOURCE_NAME })
export class ExecutionContext implements ExecutionContextModel {
  @withField({ isOptional: true })
  app?: string;

  @withField({ isOptional: true })
  environment?: ENVIRONMENT;

  @withField({ isOptional: true, type: DATA_TYPE.JSON })
  overrrides?: Partial<EnvironmentConfigModel>;

  @withField({ isOptional: true })
  queue?: string;
}
