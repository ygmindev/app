import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const { push } = useRouter();
  return (
    <Wrapper>
      <Button onPress={() => push({ pathname: '/form/name' })}>Dev</Button>
    </Wrapper>
  );
};
