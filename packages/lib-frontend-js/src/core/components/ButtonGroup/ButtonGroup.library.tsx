import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ButtonGroup } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup';
import { type ButtonGroupPropsModel } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<ButtonGroupPropsModel> = {
  Component: ButtonGroup,
  defaultProps: {
    children: [
      <Button
        key="1"
        onPress={() => console.warn('button 1')}>
        button 1
      </Button>,
      <Button
        key="2"
        onPress={() => console.warn('button 2')}>
        button 2
      </Button>,
    ],
  },
  variants: [
    {
      props: {
        children: [
          <Button
            icon="personCircle"
            key="1"
            onPress={() => console.warn('button 1')}
          />,
          <Button
            icon="personCircle"
            key="2"
            onPress={() => console.warn('button 2')}
          />,
        ],
      },
    },

    ...cartesianObject({
      size: [...Object.values(THEME_SIZE), Object.values(THEME_SIZE_MORE)],
    }).map((props) => ({
      props,
    })),
    ...cartesianObject({
      color: Object.values(THEME_COLOR),
      type: Object.values(BUTTON_TYPE),
    }).map((props) => ({
      props,
    })),
  ],
};
