import { type SystemMessageContainerPropsModel } from '@lib/frontend/ai/components/SystemMessageContainer/SystemMessageContainer.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';

export const SystemMessageContainer: LFCModel<SystemMessageContainerPropsModel> = ({
  ...props
}) => {
  const { t } = useTranslation();
  const isStreaming = props.message.status === MESSAGE_STATUS.STREAMING;
  return (
    <MessageContainer
      {...props}
      bottomElement={
        <Appearable isActive={isStreaming}>
          <Loading />
        </Appearable>
      }
      tooltipElement={
        <Button
          icon="refresh"
          onPress={async () => console.warn('hello')}
          size={THEME_SIZE.SMALL}
          tooltip={t('core:retry')}
          type={BUTTON_TYPE.INVISIBLE}
        />
      }
    />
  );
};
