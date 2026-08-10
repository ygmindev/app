import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import {
  type MessageContainerRefModel,
  type MessageContainerPropsModel,
} from '@lib/frontend/chat/components/MessageContainer/MessageContainer.models';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useClipboard } from '@lib/frontend/core/hooks/useClipboard/useClipboard';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { DATETIME_FORMAT } from '@lib/shared/datetime/utils/DateTime/DateTime.constants';
import { useMemo } from 'react';

export const MessageContainer: RLFCModel<MessageContainerRefModel, MessageContainerPropsModel> = ({
  bottomElement,
  isOwn,
  message,
  onMeasure,
  ref,
  tooltipElement,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { copy } = useClipboard();
  const { t } = useTranslation();
  const isStreaming = message.status === MESSAGE_STATUS.STREAMING;

  const created = useMemo(
    () =>
      message.created
        ? new DateTime(message.created).format(DATETIME_FORMAT.HOUR_MINUTE)
        : undefined,
    [message.created],
  );

  const element = message.text && <Text>{message.text}</Text>;

  return (
    <Wrapper
      {...wrapperProps}
      onMeasure={onMeasure}
      ref={ref}
      s={THEME_SIZE.SMALL}>
      <Activatable>
        {(isActive) => (
          <Wrapper
            align={isOwn ? FLEX_ALIGN.END : FLEX_ALIGN.START}
            s={THEME_SIZE.SMALL}>
            <Appearable
              isActive={isStreaming}
              isLazy={false}>
              <Loading />
            </Appearable>

            {isOwn ? (
              <Wrapper
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

            {bottomElement}

            <Wrapper
              isAlign
              isReverse={isOwn}
              isRow>
              {created && <Text color={theme.color.border}>{created}</Text>}

              <Appearable
                isActive={!isStreaming && isActive}
                isAlign
                isLazy={false}
                isRow>
                <Button
                  icon="copy"
                  onPress={async () => message.text && copy(message.text)}
                  size={THEME_SIZE.SMALL}
                  tooltip={t('core:copyToClipboard')}
                  type={BUTTON_TYPE.INVISIBLE}
                />

                {tooltipElement}
              </Appearable>
            </Wrapper>
          </Wrapper>
        )}
      </Activatable>
    </Wrapper>
  );
};
