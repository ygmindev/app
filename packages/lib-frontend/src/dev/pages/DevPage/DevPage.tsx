import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '#lib-frontend/core/core.models';
import { useQuery } from '#lib-frontend/core/hooks/useQuery/useQuery';
import type { DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const { data } = useQuery({
    id: 'dev',
    query: async () => {
      await sleep(3000);
    },
  });
  console.warn(data);
  return (
    <Wrapper spacing>
      <Button>dev</Button>
    </Wrapper>
  );
};
