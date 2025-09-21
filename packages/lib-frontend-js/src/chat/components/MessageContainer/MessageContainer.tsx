import { type MessageContainerPropsModel } from '@lib/frontend/chat/components/MessageContainer/MessageContainer.models';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { DATETIME_FORMAT } from '@lib/shared/datetime/utils/DateTime/DateTime.constants';
import { useMemo } from 'react';

export const MessageContainer: LFCModel<MessageContainerPropsModel> = ({
  isOwn,
  message,
  messageNext,
  messagePrevious,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();

  const created = useMemo(
    () =>
      message.created
        ? new DateTime(message.created).format(DATETIME_FORMAT.HOUR_MINUTE)
        : undefined,
    [message.created],
  );

  const createdNext = useMemo(
    () =>
      messageNext?.created
        ? new DateTime(messageNext.created).format(DATETIME_FORMAT.HOUR_MINUTE)
        : undefined,
    [messageNext?.created],
  );

  const isDateChanged = message.created?.getDate() !== messagePrevious?.created?.getDate();
  const isDateWillChange = message.created?.getDate() !== messageNext?.created?.getDate();

  const element = <Text colorRole={isOwn ? THEME_ROLE.MAIN : undefined}>{message.text}</Text>;

  return (
    <Wrapper
      {...wrapperProps}
      alignSelf={isOwn ? FLEX_ALIGN.END : undefined}
      s={THEME_SIZE.SMALL}>
      {isDateChanged && (
        <Divider>{new DateTime(message.created).format(DATETIME_FORMAT.DATE)}</Divider>
      )}

      {isOwn ? (
        <Wrapper
          alignSelf={isOwn ? FLEX_ALIGN.END : undefined}
          backgroundColor={isOwn ? THEME_COLOR.PRIMARY : undefined}
          border={isOwn ? undefined : DIRECTION.BOTTOM}
          key={message._id}
          p
          round={isOwn ? true : false}>
          {element}
        </Wrapper>
      ) : (
        element
      )}

      {created &&
        (!messageNext ||
          messageNext?.createdBy?._id !== message.createdBy?._id ||
          isDateWillChange ||
          created !== createdNext) && (
          <Text
            align={isOwn ? FONT_ALIGN.RIGHT : FONT_ALIGN.JUSTIFY}
            color={theme.color.border}>
            {created}
          </Text>
        )}
    </Wrapper>
  );
};
