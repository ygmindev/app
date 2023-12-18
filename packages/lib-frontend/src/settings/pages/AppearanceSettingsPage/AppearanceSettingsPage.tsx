import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type AppearanceSettingsPagePropsModel } from '#lib-frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AppearanceSettingsPage: LFCModel<AppearanceSettingsPagePropsModel> = ({
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>AppearanceSettingsPage</Text>
    </Wrapper>
  );
};
