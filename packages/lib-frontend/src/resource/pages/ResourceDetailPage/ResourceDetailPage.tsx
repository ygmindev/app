import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type ResourceDetailPagePropsModel } from '@lib/frontend/resource/pages/ResourceDetailPage/ResourceDetailPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ResourceDetailPage: LFCModel<ResourceDetailPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      p>
      <Text>ResourceDetailPage</Text>
    </Wrapper>
  );
};
