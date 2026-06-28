import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

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

  const { errors, handleChange, handleReset, handleSubmit, values } = useForm<{
    content?: string;
  }>({
    initialValues: { content: '' },
    onSubmit: async ({ content }) => {
      await onSubmit?.({ content, createdBy: currentUser ?? undefined });
    },
  });

  const _onSubmit = async (): Promise<void> => {
    handleSubmit();
    void sleep().then(handleReset);
  };

  const isLoading = elementState === ELEMENT_STATE.LOADING;

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <TextInput
        border
        bottomElement={
          <Wrapper
            isRow
            justify={FLEX_JUSTIFY.END}>
            {bottomElement && <Wrapper flex>{bottomElement}</Wrapper>}
            <Button
              elementState={onCancel ? undefined : elementState}
              icon={!onCancel ? 'arrowUp' : isLoading ? 'stop' : 'arrowUp'}
              onPress={isLoading && onCancel ? onCancel : _onSubmit}
              size={THEME_SIZE.SMALL}
            />
          </Wrapper>
        }
        elementState={elementState}
        error={errors?.content}
        flex
        isAutoFocus
        isBlurOnSubmit={false}
        isClearable={false}
        numberOfLines={2}
        onChange={(v) => handleChange('content')(v)}
        onSubmit={_onSubmit}
        placeholder={placeholder}
        round
        value={values.content}
      />
    </Wrapper>
  );
};
