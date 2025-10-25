import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type PingPagePropsModel } from '@lib/frontend/http/pages/PingPage/PingPage.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const PingPage: LFCModel<PingPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location, push } = useRouter();
  return (
    <Wrapper
      flex
      isCenter
      style={styles}
      testID={testID}>
      <Wrapper
        m="auto"
        width={250}>
        <Text>{location.pathname.includes('2') ? 'ping1' : 'ping2'}</Text>

        <Button
          onPress={() =>
            push({ pathname: location.pathname.includes('2') ? '/1/ping1' : '/1/ping2' })
          }>{`Switch to ${location.pathname.includes('2') ? 'ping1' : 'ping2'}`}</Button>

        <Button
          onPress={() =>
            push({
              pathname: '/app/settings/profile/name',
            })
          }>
          Settings
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
