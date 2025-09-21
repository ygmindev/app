import { type MessageContainerPropsModel } from '@lib/frontend/chat/components/MessageContainer/MessageContainer.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { DATETIME_FORMAT } from '@lib/shared/datetime/utils/DateTime/DateTime.constants';
import { useMemo } from 'react';

export const MessageContainer: LFCModel<MessageContainerPropsModel> = ({ message, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const theme = useTheme();
  const isOwn = message?.createdBy?._id === currentUser?._id;
  console.warn(message.created);
  const created = useMemo(
    () =>
      message.created
        ? new DateTime(message.created).format(DATETIME_FORMAT.HOUR_MINUTE)
        : undefined,
    [message.created],
  );
  return (
    <Wrapper
      {...wrapperProps}
      alignSelf={isOwn ? FLEX_ALIGN.END : undefined}
      backgroundColor={isOwn ? THEME_COLOR.PRIMARY : undefined}
      border={isOwn ? undefined : DIRECTION.BOTTOM}
      key={message._id}
      p
      round={isOwn ? true : false}
      s={THEME_SIZE.SMALL}>
      <Text colorRole={isOwn ? THEME_ROLE.MAIN : undefined}>{message.text}</Text>

      {created && <Text color={theme.color.border}>{created}</Text>}
    </Wrapper>
  );
};
