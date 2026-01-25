import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type KfnMembersPagePropsModel } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const KfnMembersPage: LFCModel<KfnMembersPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>KfnMembersPage</Text>
    </Wrapper>
  );
};
