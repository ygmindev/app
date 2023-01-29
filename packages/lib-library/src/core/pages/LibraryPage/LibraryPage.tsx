import { props as buttonProps } from '@lib/frontend/core/components/Button/Button.library';
import { props as textProps } from '@lib/frontend/core/components/Text/Text.library';
import type { OptionModel, SFCModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { Library } from '@lib/library/core/components/Library/Library';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import type { LibraryPagePropsModel } from '@lib/library/core/pages/LibraryPage/LibraryPage.models';
import { find } from 'lodash';

const LIBRARIES = [buttonProps, textProps].map(({ name, ...props }) => {
  const id = name || getComponentDisplayName(props.Component);
  return { id, pathname: trimPathname(id), ...props };
});

export const LibraryPage: SFCModel<LibraryPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location, push } = useRouter<{ id: string }>();
  const value = location.params?.id;

  // TODO: get from glob
  const options: Array<OptionModel> = LIBRARIES.map((params) => {
    return {
      ...params,
      label: params.id,
      onPress: () => push({ pathname: params.id }),
    } as OptionModel;
  });

  const _library = value && find(LIBRARIES, { pathname: trimPathname(value) });
  console.warn(_library);

  return (
    <NavigationLayout
      options={options}
      style={styles}
      testID={testID}
      value={value}>
      {_library ? <Library<unknown> {...(_library as LibraryPropsModel<unknown>)} /> : <NotFound />}
    </NavigationLayout>
  );
};
