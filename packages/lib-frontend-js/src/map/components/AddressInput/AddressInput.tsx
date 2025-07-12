import { type RLFCModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  type AddressInputPropsModel,
  type AddressInputRefModel,
  type AddressOptionModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = ({
  defaultValue,
  label = ({ t }) => t('core:address'),
  onChange,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const search = useMapQuery();
  return (
    <MenuInput<AddressOptionModel>
      {...wrapperProps}
      icon="location"
      label={label ?? t('core:address')}
      onChange={valueControlledSet}
      options={search}
      value={valueControlled ? ({ ...valueControlled, id: '' } as AddressOptionModel) : undefined}
    />
  );
};
