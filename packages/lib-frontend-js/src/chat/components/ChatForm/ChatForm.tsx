import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const ChatForm: LFCModel<ChatFormPropsModel> = ({ onAdd, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();

  const { errors, handleChange, handleReset, handleSubmit, values } = useForm<{
    text?: string;
  }>({
    initialValues: { text: '' },
    onSubmit: async ({ text }) => {
      await onAdd?.({ text });
    },
  });

  const onSubmit = async (): Promise<void> => {
    handleSubmit();
    handleReset();
  };

  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isRow>
      <TextInput
        border
        error={errors?.text}
        flex
        height={theme.shape.height[THEME_SIZE.MEDIUM]}
        isBlurOnSubmit={false}
        onChange={(v) => handleChange('text')(v)}
        onSubmit={onSubmit}
        round
        value={values.text}
      />

      <Button
        icon="send"
        onPress={onSubmit}
      />
    </Wrapper>
  );
};
