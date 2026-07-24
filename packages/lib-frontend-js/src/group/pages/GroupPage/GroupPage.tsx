import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useGroupResource } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource';
import {
  type GroupPageParamsModel,
  type GroupPagePropsModel,
} from '@lib/frontend/group/pages/GroupPage/GroupPage.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const GroupPage: LFCModel<GroupPagePropsModel> = ({ children }) => {
  useTranslation([]);
  const [, currentGroupSet] = useStore('group.currentGroup');
  const { location } = useRouter<GroupPageParamsModel>();
  const { get } = useGroupResource();
  const groupid = location.params?.groupid;
  return groupid ? (
    <DataBoundary
      id="group"
      query={async () => {
        const { result } = await get({ filter: [{ field: '_id', value: groupid }] });
        currentGroupSet(result);
        return result;
      }}>
      {() => (
        <Wrapper
          flex
          p>
          {children}
        </Wrapper>
      )}
    </DataBoundary>
  ) : (
    <NotFoundPage />
  );
};
