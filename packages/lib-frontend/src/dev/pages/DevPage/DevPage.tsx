import { Suspense } from 'react';

import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '#lib-frontend/core/core.models';
import { useQuery } from '#lib-frontend/core/hooks/useQuery/useQuery';
import type { DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const { data, isLoading } = useQuery({
    id: 'xxx',
    query: async () => {
      await sleep(3000);
      return 'test';
    },
  });
  return (
    <Suspense fallback={<div>fallback?</div>}>
      <Wrapper spacing>
        <Text>{`${isLoading} ${data}`}</Text>
      </Wrapper>
    </Suspense>
  );
};
