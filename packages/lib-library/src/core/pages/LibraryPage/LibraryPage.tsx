import { type LFCModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { Library } from '@lib/library/core/components/Library/Library';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { LIBRARY_PROPS } from '@lib/library/core/pages/LibraryPage/LibraryPage.constants';
import {
  type LibraryPageParamsModel,
  type LibraryPagePropsModel,
} from '@lib/library/core/pages/LibraryPage/LibraryPage.models';
import find from 'lodash/find';
import { type ComponentType } from 'react';

// TODO: get from glob
const libraries = LIBRARY_PROPS.map(({ name, ...props }) => {
  const id = name ?? getComponentDisplayName(props.Component as ComponentType);
  return { _id: id, name: id, pathname: trimPathname(id), ...props };
});

export const LibraryPage: LFCModel<LibraryPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location, push } = useRouter<LibraryPageParamsModel>();
  const value = location.params?.id;
  const valueF = value && trimPathname(value);
  const library = valueF && find(libraries, { pathname: valueF });
  const options: Array<TranslatableOptionModel> = libraries.map((library) => ({
    ...library,
    id: library._id,
    label: library._id,
    onPress: () => push({ pathname: library._id }),
  }));
  return (
    <NavigationLayout
      {...wrapperProps}
      options={options}
      value={value}>
      {library ? (
        <Library<unknown> {...(library as LibraryPropsModel<unknown>)} />
      ) : (
        <NotFoundPage />
      )}
    </NavigationLayout>
  );
};
