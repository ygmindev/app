import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { DEV } from '@lib/frontend/dev/dev.constants';
import { type DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';

export const DevPage: SFCModel<DevPagePropsModel> = ({ ...props }) => {
  const { push } = useRouter();
  return (
    <Wrapper flex>
      <Button onPress={() => push({ pathname: `${DEV}/2` })}>Go</Button>
    </Wrapper>
  );
};
