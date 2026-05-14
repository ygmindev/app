import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useSse } from '@lib/frontend/http/hooks/useSse/useSse';
import { type PingPagePropsModel } from '@lib/frontend/http/pages/PingPage/PingPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useState } from 'react';

export const PingPage: LFCModel<PingPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [data, dataSet] = useState<Array<unknown>>([]);

  useSse({
    handlers: {
      message: (x) => console.warn(x),
    },
    uri: {
      host: 'http://127.0.0.1',
      pathname: 'ai',
      // port: process.env.SERVER_APP_PYTHON_PORT,
      port: 5010,
    },
  });

  return (
    <Wrapper
      flex
      isCenter
      style={styles}
      testID={testID}>
      <Wrapper
        m="auto"
        width={250}>
        <Button onPress={() => {}}>subscribe</Button>
      </Wrapper>
    </Wrapper>
  );
};
