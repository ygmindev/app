import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const { push } = useRouter();
  return (
    <Wrapper p>
      <TextField label="test" />
    </Wrapper>
  );
};
