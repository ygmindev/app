import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { SelectField } from '@lib/frontend/core/components/SelectField/SelectField';
import type { SelectFieldPropsModel } from '@lib/frontend/core/components/SelectField/SelectField.models';

const { Default, meta } = withStory<SelectFieldPropsModel>({
  defaultProps: { options: MENU_FIXTURE_OPTIONS },
  target: SelectField,
  variants: [
    { props: { icon: ICON.person } },
    { props: { isAutoFocus: true } },
    { props: { isDisabled: true } },
    { props: { label: 'label' } },
  ],
});

export { Default, meta as default };
