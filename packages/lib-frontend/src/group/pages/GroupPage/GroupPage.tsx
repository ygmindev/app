import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useGroupResource } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource';
import {
  type GroupPageParamsModel,
  type GroupPagePropsModel,
} from '#lib-frontend/group/pages/GroupPage/GroupPage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';

export const GroupPage: LFCModel<GroupPagePropsModel> = ({ children }) => {
  const actions = useActions();
  const { location } = useRouter<GroupPageParamsModel>();
  const { get } = useGroupResource();
  const groupId = location.params?.id;
  return groupId ? (
    <DataBoundary
      id="group"
      query={async () => {
        const { result } = await get({ filter: [{ field: '_id', value: groupId }] });
        actions?.group.currentGroupSet(result);
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
    <></>
  );
};
