import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { SearchInput } from '@lib/frontend/search/components/SearchInput/SearchInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type UserInputPropsModel,
  type UserInputRefModel,
} from '@lib/frontend/user/components/UserInput/UserInput.models';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
// import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { USER_FIXTURES } from '@lib/shared/user/resources/User/User.fixtures';
import { USER } from '@lib/shared/user/user.constants';
import { forwardRef, useState } from 'react';

export const UserInput: RLFCModel<UserInputRefModel, UserInputPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation([USER]);
    const [query, querySet] = useState<string>();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const { search } = useUserResource();

    const handleQuery = async (v?: string): Promise<Array<MenuOptionModel>> => {
      console.warn(v);
      // const { result } = await getMany({
      //   filter: [{ condition: FILTER_CONDITION.CONTAINS, field: 'first', value: 'yg' }],
      // });
      // console.warn(result);
      return [];
    };

    return (
      <DataBoundary
        {...wrapperProps}
        fallbackData={USER_FIXTURES.map(({ _id }) => ({ id: _id }))}
        id="users"
        params={query}
        query={handleQuery}>
        {({ data }) => (
          <SearchInput
            label={t('user:user')}
            onSearch={querySet}
            options={data ?? []}
          />
        )}
      </DataBoundary>
    );
  },
);
