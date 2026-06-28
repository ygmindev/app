import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { type MessageContainerPropsModel } from '@lib/frontend/chat/components/MessageContainer/MessageContainer.models';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
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

  const isDateChanged =
    message.created?.toLocaleDateString() !== messagePrevious?.created?.toLocaleDateString();

  const isDateWillChange =
    message.created &&
    messageNext?.created &&
    message.created.toLocaleDateString() !== messageNext.created?.toLocaleDateString();

  const element = message.content && <Text>{message.content}</Text>;

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      {isDateChanged && (
        <Divider>{new DateTime(message.created).format(DATETIME_FORMAT.DATE)}</Divider>
      )}

      <Activatable isMobileVisible>
        {(isActive) => (
          <Wrapper
            align={FLEX_ALIGN.END}
            s={THEME_SIZE.SMALL}>
            {isOwn ? (
              <Wrapper
                alignSelf={FLEX_ALIGN.END}
                backgroundColor={THEME_COLOR.PRIMARY}
                backgroundRole={THEME_ROLE.MUTED}
                key={message._id}
                mLeft
                p
                round>
                {element}
              </Wrapper>
            ) : (
              element
            )}

            <Appearable
              isActive={isActive}
              isLazy={false}>
              <Button icon="copy" />

              <Wrapper
                isAlign
                isRow>
                {created && <Text color={theme.color.border}>{created}</Text>}
              </Wrapper>
            </Appearable>
          </Wrapper>
        )}
      </Activatable>
    </Wrapper>
  );
};
