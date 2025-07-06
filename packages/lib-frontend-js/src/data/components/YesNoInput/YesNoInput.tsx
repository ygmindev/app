import { type RLFCModel } from '@lib/frontend/core/core.models';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import {
  type YesNoInputPropsModel,
  type YesNoInputRefModel,
} from '@lib/frontend/data/components/YesNoInput/YesNoInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';

export const YesNoInput: RLFCModel<YesNoInputRefModel, YesNoInputPropsModel> = ({
  defaultValue,
  falseIcon,
  falseLabel,
  label,
  onChange,
  trueIcon,
  trueLabel,
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
  return (
    <SelectInput
      {...wrapperProps}
      label={label}
      onChange={(v) => valueControlledSet(v === BOOLEAN_STRING.TRUE ? true : undefined)}
      options={[
        { icon: trueIcon, id: BOOLEAN_STRING.TRUE, label: trueLabel ?? t('core:yes') },
        {
          color: THEME_COLOR.ERROR,
          icon: falseIcon,
          id: BOOLEAN_STRING.FALSE,
          label: falseLabel ?? t('core:no'),
        },
      ]}
      value={valueControlled ? BOOLEAN_STRING.TRUE : BOOLEAN_STRING.FALSE}
    />
  );
};
