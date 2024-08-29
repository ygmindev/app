import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type SsrPagePropsModel } from '@lib/frontend/test/pages/SsrPage/SsrPage.models';
import { SSR } from '@lib/frontend/test/test.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const SsrPage: LFCModel<SsrPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { data } = useQuery(SSR, async () => {
    await sleep(1000);
    return 'SSR failed';
  });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <Text>SsrPage</Text>

      <Text>{data}</Text>
    </Wrapper>
  );
};
