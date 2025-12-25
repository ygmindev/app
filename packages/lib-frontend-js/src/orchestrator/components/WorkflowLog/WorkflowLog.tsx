import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '@lib/frontend/core/core.models';
import { LOG_MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/logging/resources/LogMessage/LogMessage.constants';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { type WorkflowLogPropsModel } from '@lib/frontend/orchestrator/components/WorkflowLog/WorkflowLog.models';
import { useResourceSubscribe } from '@lib/frontend/resource/hooks/useResourceSubscribe/useResourceSubscribe';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { useEffect } from 'react';

export const WorkflowLog: FCModel<WorkflowLogPropsModel> = ({
  id,
  onStatusChange,
  status = JOB_STATUS.UNKNOWN,
  workflow,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });

  useEffect(() => {
    onStatusChange?.(JOB_STATUS.STARTED);
  }, []);

  const { data } = useResourceSubscribe<LogMessageModel, undefined, true>({
    ...LOG_MESSAGE_RESOURCE_PARAMS,
    input: { id },
    isStreaming: true,
    onData: (data, onClose) => {
      if (
        id === data.result?.process &&
        [LOG_MESSAGE_TYPE.SUCCESS, LOG_MESSAGE_TYPE.FAIL].includes(
          data.result?.type as LOG_MESSAGE_TYPE,
        )
      ) {
        onClose();

        switch (data.result.type) {
          case LOG_MESSAGE_TYPE.SUCCESS: {
            onStatusChange?.(JOB_STATUS.SUCCESS);
            break;
          }
          case LOG_MESSAGE_TYPE.FAIL: {
            onStatusChange?.(JOB_STATUS.FAIL);
            break;
          }
        }
      } else {
        status !== JOB_STATUS.RUNNING && onStatusChange?.(JOB_STATUS.RUNNING);
      }
    },
    onError: (e) => {
      logger.error(e);
      onStatusChange?.(JOB_STATUS.FAIL);
    },
  });

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p
      s>
      <WorkflowButtons
        onStatusChange={onStatusChange}
        status={status}
        workflow={workflow}
      />

      <Wrapper
        backgroundColor="#000000"
        flex
        p
        round>
        {data?.map?.((v) => (
          <Text
            color="#FFFFFF"
            family={FONT_FAMILY.CODE}
            key={v.result?._id}>
            {v.result?.message}
          </Text>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
