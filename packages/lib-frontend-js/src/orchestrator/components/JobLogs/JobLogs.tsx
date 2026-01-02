import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { LOG_MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/logging/resources/LogMessage/LogMessage.constants';
import { type JobLogsPropsModel } from '@lib/frontend/orchestrator/components/JobLogs/JobLogs.models';
import { useResourceSubscribe } from '@lib/frontend/resource/hooks/useResourceSubscribe/useResourceSubscribe';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';

export const JobLogs: LFCModel<JobLogsPropsModel> = ({
  jobId,
  onData,
  onError,
  status = JOB_STATUS.UNKNOWN,
  workflow,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();

  const { data } = useResourceSubscribe<LogMessageModel, undefined, true>({
    ...LOG_MESSAGE_RESOURCE_PARAMS,
    input: { id: jobId },
    isStreaming: true,
    onData,
    onError,
  });

  return (
    <Wrapper
      {...wrapperProps}
      backgroundColor="#000000"
      border
      height={theme.layout.height[THEME_SIZE.SMALL]}
      isVerticalScrollable
      isVerticalScrollableVisible
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
