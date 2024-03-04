import { _ChatContainer } from '@lib/frontend/chat/components/ChatContainer/_ChatContainer';
import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';

export const ChatContainer: LFCModel<ChatContainerPropsModel> = ({
  messages,
  onChange,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { t } = useTranslation();
  const [currentUser] = useStore('user.currentUser');
  return (
    <Wrapper
      {...wrapperProps}
      border
      height={theme.layout.height[THEME_SIZE.MEDIUM]}
      isOverflowHidden
      round
      width={theme.layout.width[THEME_SIZE.SMALL]}>
      <_ChatContainer
        backgroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
        backgroundColorPrimary={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]}
        backgroundColorSecondary={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MUTED]}
        borderColor={theme.color.border}
        borderRadius={theme.shape.borderRadius[THEME_SIZE.MEDIUM]}
        colorPrimary={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
        colorSecondary={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
        currentUser={currentUser ?? { _id: 'test' }}
        inputHeight={theme.shape.size[THEME_SIZE.MEDIUM]}
        messages={messages}
        onChange={onChange}
        placeholder={t('chat:typeMessage')}
        sendElement={({ handleSend, value }) => (
          <Button
            elementState={value ? undefined : ELEMENT_STATE.DISABLED}
            icon="send"
            onPress={() => handleSend(value)}
            size={THEME_SIZE.SMALL}
          />
        )}
        spacing={theme.shape.spacing[THEME_SIZE.MEDIUM]}
      />
    </Wrapper>
  );
};
