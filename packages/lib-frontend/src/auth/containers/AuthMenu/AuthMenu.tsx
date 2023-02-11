import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import type { AuthMenuOptionModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import {
  AUTH_MENU_OPTIONS,
  AUTH_MENU_USERNAME_WIDTH,
} from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import type { AuthMenuPropsModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useAuthState } from '@lib/frontend/auth/hooks/useAuthState/useAuthState';
import { AUTH_STATE } from '@lib/frontend/auth/hooks/useAuthState/useAuthState.constants';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { StyleBrightnessModel } from '@lib/frontend/style/style.models';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { AUTH, SIGN_OUT } from '@lib/shared/auth/auth.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { SETTINGS } from '@lib/shared/settings/settings.constants';
import { BRIGHTNESS, STYLE } from '@lib/shared/style/style.constants';
import { useMemo } from 'react';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const authState = useAuthState();
  const actions = useActions();
  const currentUser = useStore((state) => state.user.currentUser);
  const brightness = useStore((state) => state.style.brightness);

  const { t } = useTranslation([AUTH, SETTINGS, STYLE]);

  const _optionsOverrides = useMemo<Record<string, PartialModel<AuthMenuOptionModel>>>(
    () => ({
      [BRIGHTNESS]: {
        subOptions: AUTH_MENU_OPTIONS.find(({ id }) => id === BRIGHTNESS)?.subOptions?.map(
          (subOption) => ({
            ...subOption,
            elementState:
              subOption.id === (brightness || 'device') ? ELEMENT_STATE.ACTIVE : undefined,
            onPress: () =>
              actions?.style.brightnessSet(
                subOption.id === 'device' ? undefined : (subOption.id as StyleBrightnessModel),
              ),
          }),
        ),
      },
      [SETTINGS]: { onPress: () => push({ pathname: SETTINGS }) },
      [SIGN_OUT]: { onPress: signOut },
    }),
    [push, signOut],
  );

  const _options = useMemo(
    () =>
      AUTH_MENU_OPTIONS.reduce(
        (result, option) =>
          option.isProtected && authState !== AUTH_STATE.AUTHENTICATED
            ? result
            : [
                ...result,
                merge<AuthMenuOptionModel>({
                  values: [_optionsOverrides[option.id] || {}, option],
                }),
              ],
        [] as Array<AuthMenuOptionModel>,
      ),
    [authState, signOut],
  );

  return (
    <Menu
      anchor={(isOpen) => (
        <Button
          elementState={isOpen ? ELEMENT_STATE.ACTIVE : undefined}
          icon="person"
        />
      )}
      options={_options}
      style={styles}
      topElement={
        currentUser ? (
          <Text
            align={FONT_ALIGN.CENTER}
            isEllipsis
            width={AUTH_MENU_USERNAME_WIDTH}>
            {currentUser.email}
          </Text>
        ) : (
          <SignInButton />
        )
      }
    />
  );
};
