import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { SettingsInput } from '@lib/frontend/settings/components/SettingsInput/SettingsInput';
import { APPEARANCE_SETTINGS_PAGE_FIELDS } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage.constants';
import { type AppearanceSettingsPagePropsModel } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AppearanceSettingsPage: LFCModel<AppearanceSettingsPagePropsModel> = ({
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      s>
      {APPEARANCE_SETTINGS_PAGE_FIELDS.map(({ element, id, title }) => (
        <SettingsInput
          element={element}
          id={id}
          key={id}
          title={title}
        />
      ))}
    </Wrapper>
  );
};
