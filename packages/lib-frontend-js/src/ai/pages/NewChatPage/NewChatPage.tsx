import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const NewChatPage: LFCModel<NewChatPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <AiChatForm
        onSubmit={async (e) => {
          console.warn(e);
        }}
      />
    </Wrapper>
  );
};
