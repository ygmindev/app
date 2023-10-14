import range from 'lodash/range';

import { type AppHomePagePropsModel } from '#lib-frontend/app/pages/AppHomePage/AppHomePage.models';
import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useGroupResource } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

export const AppHomePage: LFCModel<AppHomePagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([GROUP]);
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { getManyProtected } = useGroupResource();
  return (
    <MainLayout
      {...wrapperProps}
      p
      s>
      <Text type={FONT_TYPE.HEADLINE}>{t('core:welcomeBack')}</Text>

      <LineGroup title={t('group:group_plural', { value: currentUser?.email })}>
        <DataBoundary
          // fallback={
          //   <SkeletonGroup>
          //     {range(3).map((i) => (
          //       <LineItem key={i} />
          //     ))}
          //   </SkeletonGroup>
          // }
          fallbackData={{
            result: range(3).map((i) => ({ _id: `${i}` })),
          }}
          id="accesses"
          query={async () => getManyProtected({ filter: [] })}>
          {({ data }) => (
            <>
              {data?.result?.map(({ _id, name, types }) => (
                <LineItem
                  key={_id}
                  label={name}
                  onPress={() => null}>
                  <Wrapper isRowAlign>
                    {types?.map((type) => <Chip key={type}>{type}</Chip>)}
                  </Wrapper>
                </LineItem>
              ))}
            </>
          )}
        </DataBoundary>
      </LineGroup>
    </MainLayout>
  );
};

// import range from 'lodash/range';

// import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
// import { type AppHomePagePropsModel } from '#lib-frontend/app/pages/AppHomePage/AppHomePage.models';
// import { Chip } from '#lib-frontend/core/components/Chip/Chip';
// import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
// import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
// import { Text } from '#lib-frontend/core/components/Text/Text';
// import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
// import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
// import { type LFCModel } from '#lib-frontend/core/core.models';
// import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
// import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
// import { useGroupResource } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource';
// import { GROUP } from '#lib-frontend/group/group.constants';
// import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
// import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
// import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

// export const AppHomePage: LFCModel<AppHomePagePropsModel> = ({ ...props }) => {
//   const { t } = useTranslation([GROUP]);
//   const { wrapperProps } = useLayoutStyles({ props });
//   const currentUser = useCurrentUser();
//   const { getManyProtected } = useGroupResource();
//   return (
//     <MainLayout
//       {...wrapperProps}
//       p
//       s>
//       <Text type={FONT_TYPE.HEADLINE}>{t('core:welcomeBack')}</Text>

//       <DataBoundary
//         fallback={
//           <SkeletonGroup>
//             <LineGroup title={t('group:group_plural')}>
//               {range(5).map((i) => (
//                 <LineItem
//                   elementState={ELEMENT_STATE.LOADING}
//                   key={i}
//                 />
//               ))}
//             </LineGroup>
//           </SkeletonGroup>
//         }
//         id="accesses"
//         query={async () => getManyProtected({ filter: [] })}>
//         {({ data }) => (
//           <LineGroup title={t('group:group_plural', { value: currentUser?.email })}>
//             {data?.result?.map(({ _id, name, types }) => (
//               <LineItem
//                 key={_id}
//                 label={name}
//                 onPress={() => null}>
//                 <Wrapper isRowAlign>{types?.map((type) => <Chip key={type}>{type}</Chip>)}</Wrapper>
//               </LineItem>
//             ))}
//           </LineGroup>
//         )}
//       </DataBoundary>
//     </MainLayout>
//   );
// };
