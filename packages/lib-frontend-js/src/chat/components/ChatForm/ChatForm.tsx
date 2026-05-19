import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

export const ChatForm: LFCModel<ChatFormPropsModel> = ({ bottomElement, onSubmit, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();

  const { errors, handleChange, handleReset, handleSubmit, values } = useForm<{
    text?: string;
  }>({
    initialValues: { text: '' },
    onSubmit: async ({ text }) => {
      await onSubmit?.({ created: new DateTime(), createdBy: currentUser ?? undefined, text });
    },
  });

  const _onSubmit = async (): Promise<void> => {
    handleSubmit();
    void sleep().then(handleReset);
  };

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
              icon="arrowUp"
              onPress={_onSubmit}
              size={THEME_SIZE.SMALL}
            />
          </Wrapper>
        }
        error={errors?.text}
        flex
        isAutoFocus
        isBlurOnSubmit={false}
        isClearable={false}
        numberOfLines={3}
        onChange={(v) => handleChange('text')(v)}
        onSubmit={_onSubmit}
        round
        value={values.text}
      />
    </Wrapper>
  );
};
