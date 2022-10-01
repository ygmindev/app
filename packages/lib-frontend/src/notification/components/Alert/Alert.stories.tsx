import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { AlertPropsModel } from '@lib/frontend/notification/components/Alert/Alert.models';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';

const Component: SFCModel<AlertPropsModel> = ({ id: _, ...props }) => {
  const { alertAdd } = useAlert();
  return <Button onPress={() => alertAdd(props)}>alert</Button>;
};

const { Default, meta } = withStory<AlertPropsModel>({
  defaultProps: { id: '', message: 'message' },
  displayName: 'Alert',
  target: Component,
  variants: [
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { icon: ICON.person } },
    { props: { title: 'title' } },
    { props: { icon: ICON.person, title: 'title' } },
  ],
});

export { Default, meta as default };
