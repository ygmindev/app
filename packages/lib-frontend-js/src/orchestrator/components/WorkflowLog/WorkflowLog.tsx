import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '@lib/frontend/core/core.models';
import { LOG_MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/logging/resources/LogMessage/LogMessage.constants';
import { type WorkflowLogPropsModel } from '@lib/frontend/orchestrator/components/WorkflowLog/WorkflowLog.models';
import { useResourceSubscribe } from '@lib/frontend/resource/hooks/useResourceSubscribe/useResourceSubscribe';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';

export const WorkflowLog: FCModel<WorkflowLogPropsModel> = ({ id, workflow, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { data } = useResourceSubscribe<LogMessageModel, undefined, true>({
    ...LOG_MESSAGE_RESOURCE_PARAMS,
    input: { id },
    isStreaming: true,
  });
  return (
    <Wrapper
      {...wrapperProps}
      backgroundColor="#000000"
      flex
      m
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
  );
};
