import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MarkdownView } from '@lib/frontend/documentation/components/MarkdownView/MarkdownView';
import { type GettingStartedPagePropsModel } from '@lib/frontend/documentation/pages/GettingStartedPage/GettingStartedPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const GettingStartedPage: LFCModel<GettingStartedPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const text = `
    # Getting Started
  `;
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <MarkdownView>{text}</MarkdownView>

      {/* <MarkdownEditor /> */}
    </Wrapper>
  );
};
