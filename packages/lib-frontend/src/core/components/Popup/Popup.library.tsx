import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Popup } from '@lib/frontend/core/components/Popup/Popup';
import type {
  PopupPropsModel,
  PopupRefModel,
} from '@lib/frontend/core/components/Popup/Popup.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import { useRef } from 'react';

const Component: SFCModel<PopupPropsModel> = (props) => {
  const ref = useRef<PopupRefModel>(null);
  return (
    <Wrapper spacing>
      <Button onPress={() => ref?.current?.open('https://www.google.com')}>Popup</Button>

      <Popup {...props} forwardedRef={ref} onClose={() => debug('closed')} />
    </Wrapper>
  );
};

const { Default, meta } = withStory<PopupPropsModel>({
  defaultProps: {},
  displayName: 'Popup',
  target: Component,
});

export { Default, meta as default };
