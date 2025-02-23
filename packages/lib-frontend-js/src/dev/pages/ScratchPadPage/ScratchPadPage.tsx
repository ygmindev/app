import { Button } from '@lib/frontend/core/components/Button/Button';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useGraphQlWebsocket } from '@lib/frontend/data/hooks/useGraphQlWebsocket/useGraphQlWebsocket';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { WEBSOCKET } from '@lib/shared/http/http.constants';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  useGraphQlWebsocket({
    uri: async () => ({
      pathname: `api/${GRAPHQL}/${WEBSOCKET}`,
    }),
  });

  const onPress = async (): Promise<void> => {
    await sleep(1000);
    // await http.post({
    //   params: {
    //     query: 'mutation messageQuery { messageQuery { id message sent } }',
    //   },
    //   url: '',
    // });
    // void send('hello');
  };

  return (
    <MainLayout
      {...wrapperProps}
      p>
      <Button onPress={onPress}>test</Button>
    </MainLayout>
  );
};
