import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import {
  type UseOwnResourceModel,
  type UseOwnResourceParamsModel,
} from '@lib/frontend/user/hooks/useOwnResource/useOwnResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { collapseFilter } from '@lib/shared/resource/utils/collapseFilter/collapseFilter';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import filter from 'lodash/filter';

export const useOwnResource = <TType, TForm = EntityResourceDataModel<TType>>({
  afterCreate,
  afterRemove,
  afterUpdate,
  name,
  ...params
}: UseOwnResourceParamsModel<TType, TForm>): UseOwnResourceModel<TType, TForm> => {
  const [currentUser, currentUserSet] = useStore('user.currentUser');
  return useResource({
    ...params,
    afterCreate: async (params) => {
      currentUser &&
        params.output.result &&
        currentUserSet({
          ...currentUser,
          [name]: [...((currentUser[name] as Array<unknown>) ?? []), params.output.result],
        });
      return afterCreate ? afterCreate(params) : params.output;
    },
    afterRemove: async (params) => {
      currentUser &&
        params.output.result &&
        currentUserSet({
          ...currentUser,
          [name]: filter(
            (currentUser[name] as Array<unknown>) ?? [],
            collapseFilter(params.input?.filter),
          ),
        });
      return afterRemove ? afterRemove(params) : params.output;
    },
    // TODO: implement
    // afterUpdate: async (params) => {
    //   return afterUpdate ? afterUpdate(params) : params.output;
    // },
    name,
    rootName: USER_RESOURCE_NAME,
  });
};
