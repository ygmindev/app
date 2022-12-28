import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';

const { Story, meta } = withStory<SelectFieldPropsModel>({
  defaultProps: { options: MENU_FIXTURE_OPTIONS },
  target: SelectField,
  variants: [
    { props: { icon: ICONS.person } },
    { props: { isAutoFocus: true } },
    { props: { isDisabled: true } },
    { props: { label: 'label' } },
  ],
});

export { meta as default, Story };
