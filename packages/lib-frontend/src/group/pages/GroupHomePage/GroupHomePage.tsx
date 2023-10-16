import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useGroupResource } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource';
import { type GroupHomePagePropsModel } from '#lib-frontend/group/pages/GroupHomePage/GroupHomePage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export const GroupHomePage: LFCModel<GroupHomePagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<WithIdModel>();
  const { get } = useGroupResource();
  location.params?.id;

  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>GroupHomePage</Text>
    </Wrapper>
  );
};
