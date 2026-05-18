import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

export const ChatForm: LFCModel<ChatFormPropsModel> = ({ onAdd, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const currentUser = useCurrentUser();

  const { errors, handleChange, handleReset, handleSubmit, values } = useForm<{
    text?: string;
  }>({
    initialValues: { text: '' },
    onSubmit: async ({ text }) => {
      await onAdd?.({ created: new DateTime(), createdBy: currentUser ?? undefined, text });
    },
  });

  const onSubmit = async (): Promise<void> => {
    handleSubmit();
    void sleep().then(handleReset);
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
        isBlurOnSubmit={false}
        isClearable={false}
        numberOfLines={3}
        onChange={(v) => handleChange('text')(v)}
        onSubmit={onSubmit}
        rightElement={
          <Button
            icon="arrowUp"
            onPress={onSubmit}
            size={THEME_SIZE.SMALL}
          />
        }
        round
        value={values.text}
      />
    </Wrapper>
  );
};
