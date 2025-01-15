import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { SearchInput } from '@lib/frontend/search/components/SearchInput/SearchInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type UserInputPropsModel,
  type UserInputRefModel,
  type UserOptionModel,
} from '@lib/frontend/user/components/UserInput/UserInput.models';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { USER } from '@lib/shared/user/user.constants';
import { forwardRef } from 'react';

export const UserInput: RLFCModel<UserInputRefModel, UserInputPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation([USER]);

    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const { search } = useUserResource();

    const handleSearch = async (query?: string): Promise<Array<UserOptionModel>> =>
      query
        ? ((await search({ query })).result ?? []).map((user) => ({ id: user._id ?? '', user }))
        : [];

    return (
      <SearchInput
        {...wrapperProps}
        label={t('user:user')}
        // onChange={(v) => {
        //   const user = v && data?.find((vv) => vv._id === v);
        //   valueControlledSet(user ? { _id: user._id } : undefined);
        // }}
        onSearch={handleSearch}
        renderOption={({ user }) => (
          <Wrapper>
            <Text isBold>{user.email ?? ''}</Text>
          </Wrapper>
        )}
        value={valueControlled?._id}
      />
    );
  },
);
