import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FileInput } from '@lib/frontend/data/components/FileInput/FileInput';
import { type FileInputRefModel } from '@lib/frontend/data/components/FileInput/FileInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useRef } from 'react';

export const ChatForm: LFCModel<ChatFormPropsModel> = ({
  bottomElement,
  elementState,
  onCancel,
  onSubmit,
  placeholder,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();

  const { errors, handleChange, handleReset, handleSubmit, values } = useForm<
    Partial<MessageModel>
  >({
    initialValues: { text: '' },
    onSubmit: async ({ text }) => {
      await onSubmit?.({ createdBy: currentUser ?? undefined, text });
    },
  });

  const _onSubmit = async (): Promise<void> => {
    handleSubmit();
    void sleep().then(handleReset);
  };

  const fileInputRef = useRef<FileInputRefModel>(null);

  const isLoading = elementState === ELEMENT_STATE.LOADING;

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <FileInput
        isButton={false}
        ref={fileInputRef}
      />

      <TextInput
        border
        bottomElement={
          <Wrapper
            isRow
            justify={FLEX_JUSTIFY.SPACE_BETWEEN}
            s={THEME_SIZE.SMALL}>
            {bottomElement && <Wrapper flex>{bottomElement}</Wrapper>}

            <Menu
              anchor={(isOpen) => (
                <Button
                  elementState={isOpen ? ELEMENT_STATE.ACTIVE : undefined}
                  icon="add"
                  size={THEME_SIZE.SMALL}
                />
              )}
              options={[
                {
                  icon: 'paperclip',
                  id: 'attach',
                  label: 'Attach',
                  onPress: () => fileInputRef.current?.open?.(),
                },
              ]}
            />

            <Button
              elementState={onCancel ? undefined : elementState}
              icon={!onCancel ? 'arrowUp' : isLoading ? 'stop' : 'arrowUp'}
              onPress={isLoading && onCancel ? onCancel : _onSubmit}
              size={THEME_SIZE.SMALL}
            />
          </Wrapper>
        }
        elementState={elementState}
        error={errors?.text}
        flex
        isAutoFocus
        isBlurOnSubmit={false}
        isClearable={false}
        numberOfLines={2}
        onChange={(v) => handleChange('text')(v)}
        onSubmit={_onSubmit}
        placeholder={placeholder}
        round
        value={values.text}
      />
    </Wrapper>
  );
};
