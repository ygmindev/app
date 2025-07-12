import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type UserInputPropsModel,
  type UserInputRefModel,
  type UserOptionModel,
} from '@lib/frontend/user/components/UserInput/UserInput.models';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { USER } from '@lib/shared/user/user.constants';

export const UserInput: RLFCModel<UserInputRefModel, UserInputPropsModel> = ({
  defaultValue,
  onChange,
  value,
  ...props
}) => {
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
    <MenuInput<UserOptionModel>
      {...wrapperProps}
      label={t('user:user')}
      onChange={(v) => valueControlledSet(v.user)}
      onSearch={handleSearch}
      renderOption={(option) => (
        <Wrapper
          isAlign
          isRow>
          <Text isBold>{option?.user?.email}</Text>

          <Text>-</Text>

          <Text>{filterNil([option?.user.first, option?.user.last]).join(' ')}</Text>
        </Wrapper>
      )}
      renderValue={(v) => v?.user?.email}
      value={valueControlled ? { id: valueControlled._id ?? '', user: valueControlled } : undefined}
    />
  );
};
