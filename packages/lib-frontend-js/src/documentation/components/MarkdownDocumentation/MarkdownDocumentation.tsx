import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type MarkdownDocumentationPropsModel } from '@lib/frontend/documentation/components/MarkdownDocumentation/MarkdownDocumentation.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const MarkdownDocumentation: LFCModel<MarkdownDocumentationPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <Wrapper {...wrapperProps}></Wrapper>;
};
