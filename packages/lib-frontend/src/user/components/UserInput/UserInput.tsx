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
import { type PartialModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { USER_FIXTURES } from '@lib/shared/user/resources/User/User.fixtures';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
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
    const handleQuery = async (v?: string): Promise<Array<PartialModel<UserModel>>> =>
      v ? (await search({ query: v })).result ?? [] : [];

    return (
      <DataBoundary
        {...wrapperProps}
        fallbackData={USER_FIXTURES}
        id="users"
        params={query}
        query={handleQuery}>
        {({ data, reset, setData }) => (
          <SearchInput
            label={t('user:user')}
            onBlur={() => {
              void setData(undefined);
            }}
            onChange={(v) => {
              const user = v && data?.find((vv) => vv._id === v);
              valueControlledSet(user ? { _id: user._id } : undefined);
            }}
            onSearch={(v) => {
              querySet(v);
              void reset();
            }}
            options={data?.map(({ _id, email }) => ({ id: _id ?? uid(), label: email })) ?? []}
            value={valueControlled?._id}
          />
        )}
      </DataBoundary>
    );
  },
);
