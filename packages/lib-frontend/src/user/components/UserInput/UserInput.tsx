import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { SearchInput } from '@lib/frontend/search/components/SearchInput/SearchInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type UserInputPropsModel,
  type UserInputRefModel,
} from '@lib/frontend/user/components/UserInput/UserInput.models';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
// import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { USER_FIXTURES } from '@lib/shared/user/resources/User/User.fixtures';
import { forwardRef } from 'react';

export const UserInput: RLFCModel<UserInputRefModel, UserInputPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const { getMany } = useUserResource();

    const handleQuery = async (): Promise<Array<MenuOptionModel>> => {
      // const { result } = await getMany({
      //   filter: [{ condition: FILTER_CONDITION.CONTAINS, field: 'first', value: 'yg' }],
      // });
      // console.warn(result);
      return [];
    };

    return (
      <DataBoundary
        fallbackData={USER_FIXTURES.map(({ _id }) => ({ id: _id }))}
        id="users"
        query={handleQuery}>
        {({ data }) => {
          console.warn(data);
          return (
            <SearchInput
              {...wrapperProps}
              // onSearch={console.warn}
              options={data ?? []}
            />
          );
        }}
      </DataBoundary>
    );
  },
);
