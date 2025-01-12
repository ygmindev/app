import { Button } from '@lib/frontend/core/components/Button/Button';
import { ButtonGroup } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup';
import { type ButtonGroupPropsModel } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ButtonGroupPropsModel> = {
  Component: ButtonGroup,
  defaultProps: {
    children: [
      <Button onPress={() => console.warn('button 1')}>button 1</Button>,
      <Button onPress={() => console.warn('button 2')}>button 2</Button>,
    ],
  },
  variants: [
    {
      props: {
        children: [
          <Button
            icon="personCircle"
            onPress={() => console.warn('button 1')}
          />,
          <Button
            icon="personCircle"
            onPress={() => console.warn('button 2')}
          />,
        ],
      },
    },
  ],
};
