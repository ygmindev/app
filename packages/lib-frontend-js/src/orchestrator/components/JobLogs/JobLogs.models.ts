import { type WorkflowTitlePropsModel } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle.models';
import { type UseResourceSubscribeParamsModel } from '@lib/frontend/resource/hooks/useResourceSubscribe/useResourceSubscribe.models';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';

export type JobLogsPropsModel = Pick<WorkflowTitlePropsModel, 'status' | 'workflow'> &
  Pick<UseResourceSubscribeParamsModel<LogMessageModel, undefined, true>, 'onData' | 'onError'> & {
    jobId: string;
  };
