import { Button } from '@lib/frontend/core/components/Button/Button';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const http = useApi({
    host: process.env.SERVER_APP_HOST,
    pathname: `api/${GRAPHQL}`,
    port: process.env.SERVER_APP_PORT,
  });

  const onPress = async (): Promise<void> => {
    await sleep(1000);
    await http.post({
      params: {
        query: 'subscription messageSubscription { messageSubscription { id message sent } }',
      },
      request: { responseType: HTTP_RESPONSE_TYPE.STREAM },
      url: '',
    });
    await sleep(1000);
    await http.post({
      params: {
        query: 'mutation messageQuery { messageQuery { id message sent } }',
      },
      url: '',
    });
  };

  return (
    <MainLayout
      {...wrapperProps}
      p>
      <Button onPress={onPress}>test</Button>
    </MainLayout>
  );
};
