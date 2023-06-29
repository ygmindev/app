import find from 'lodash/find';
import { type ComponentType } from 'react';

import { type OptionModel, type SFCModel } from '#lib-frontend/core/core.models';
import { NavigationLayout } from '#lib-frontend/core/layouts/NavigationLayout/NavigationLayout';
import { getComponentDisplayName } from '#lib-frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '#lib-frontend/route/pages/NotFoundPage/NotFoundPage';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { Library } from '#lib-library/core/components/Library/Library';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { LIBRARY_PROPS } from '#lib-library/core/pages/LibraryPage/LibraryPage.constants';
import {
  type LibraryPageParamsModel,
  type LibraryPagePropsModel,
} from '#lib-library/core/pages/LibraryPage/LibraryPage.models';

// TODO: get from glob
const libraries = LIBRARY_PROPS.map(({ name, ...props }) => {
  const id = name || getComponentDisplayName(props.Component as ComponentType);
  return { id, name: id, pathname: trimPathname(id), ...props };
});

export const LibraryPage: SFCModel<LibraryPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location, push } = useRouter<LibraryPageParamsModel>();
  const value = location.params?.id;
  const valueF = value && trimPathname(value);

  const options: Array<OptionModel> = libraries.map((params) => ({
    ...params,
    label: params.id,
    onPress: () => push({ pathname: params.id }),
  }));

  const library = valueF && find(libraries, { pathname: valueF });
  return (
    <NavigationLayout
      options={options}
      style={styles}
      testID={testID}
      value={value}>
      {library ? (
        <Library<unknown> {...(library as LibraryPropsModel<unknown>)} />
      ) : (
        <NotFoundPage />
      )}
    </NavigationLayout>
  );
};
