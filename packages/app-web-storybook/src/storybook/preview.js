import { Root } from '@lib/frontend/root/containers/Root/Root';

export const decorators = [
  (Story) => (
    <Root>
      <Story />
    </Root>
  ),
];
