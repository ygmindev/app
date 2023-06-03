import type { OptionModel, SFCModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { Library } from '@lib/library/core/components/Library/Library';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { LIBRARY_PROPS } from '@lib/library/core/pages/LibraryPage/LibraryPage.constants';
import type {
  LibraryPageParamsModel,
  LibraryPagePropsModel,
} from '@lib/library/core/pages/LibraryPage/LibraryPage.models';
import find from 'lodash/find';
import type { ComponentType } from 'react';

// TODO: get from glob
const _libraries = LIBRARY_PROPS.map(({ name, ...props }) => {
  const id = name || getComponentDisplayName(props.Component as ComponentType);
  return { id, name: id, pathname: trimPathname(id), ...props };
});

export const LibraryPage: SFCModel<LibraryPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location, push } = useRouter<LibraryPageParamsModel>();
  const value = location.params?.id;
  const _value = value && trimPathname(value);

  const _options: Array<OptionModel> = _libraries.map((params) => ({
    ...params,
    label: params.id,
    onPress: () => push({ pathname: params.id }),
  }));

  const _library = _value && find(_libraries, { pathname: _value });
  return (
    <NavigationLayout
      options={_options}
      style={styles}
      testID={testID}
      value={value}>
      {_library ? (
        <Library<unknown> {...(_library as LibraryPropsModel<unknown>)} />
      ) : (
        <NotFoundPage />
      )}
    </NavigationLayout>
  );
};

// import type { OptionModel, SFCModel } from '@lib/frontend/core/core.models';
// import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
// import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
// import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
// import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
// import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
// import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
// import { Library } from '@lib/library/core/components/Library/Library';
// import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
// import { LIBRARY_PROPS } from '@lib/library/core/pages/LibraryPage/LibraryPage.constants';
// import type { LibraryPagePropsModel } from '@lib/library/core/pages/LibraryPage/LibraryPage.models';
// import find from 'lodash/find';
// import type { ComponentType } from 'react';

// // TODO: get from glob
// const LIBRARIES = LIBRARY_PROPS.map(({ name, ...props }) => {
//   const id = name || getComponentDisplayName(props.Component as ComponentType);
//   return { id, name: id, pathname: trimPathname(id), ...props };
// });

// export const LibraryPage: SFCModel<LibraryPagePropsModel> = ({ testID, ...props }) => {
//   const { styles } = useStyles({ props });
//   const { location, push } = useRouter<{ id: string }>();
//   const value = location.params?.id;
//   const _value = value && trimPathname(value);

//   // const { get } = useHttp({ baseUri: { host: '/' } });
//   // const { data } = useQuery<Record<string, DocgenMetaDataModel>>({
//   //   id: 'components',
//   //   query: async () => {
//   //     const result = await get<void, Record<string, DocgenMetaDataModel>>({
//   //       path: '/library/components.json',
//   //     });
//   //     return mapKeys(result, (_, k) => trimPathname(k));
//   //   },
//   // });

//   const _options: Array<OptionModel> = LIBRARIES.map((params) => {
//     return {
//       ...params,
//       label: params.id,
//       onPress: () => push({ pathname: params.id }),
//     } as OptionModel;
//   });

//   const _library = _value && find(LIBRARIES, { pathname: _value });
//   // const _propTypes = (_value && data && data[_value] && data[_value].propTypes) || undefined;

//   return (
//     <NavigationLayout
//       options={_options}
//       style={styles}
//       testID={testID}
//       value={value}>
//       {_library ? (
//         <Library<unknown>
//           {...(_library as LibraryPropsModel<unknown>)}
//           // propTypes={_propTypes}
//         />
//       ) : (
//         <NotFoundPage />
//       )}
//     </NavigationLayout>
//   );
// };
