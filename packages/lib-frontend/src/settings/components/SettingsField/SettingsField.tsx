import { cloneElement, type ReactElement, useState } from 'react';

import { Accordion } from '#lib-frontend/animation/components/Accordion/Accordion';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { SwitchField } from '#lib-frontend/data/components/SwitchField/SwitchField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type SettingsFieldPropsModel } from '#lib-frontend/settings/components/SettingsField/SettingsField.models';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type CallableModel } from '#lib-shared/core/core.models';
import { getValue } from '#lib-shared/core/utils/getValue/getValue';

export const SettingsField = <TType = string,>({
  element,
  id,
  title,
  ...props
}: LFCPropsModel<SettingsFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<SettingsFieldPropsModel<TType>>
> => {
  const { t } = useTranslation([SETTINGS]);
  const { wrapperProps } = useLayoutStyles({ props });
  const value = useStore((state) => getValue(state, id));
  console.warn(`${id}: ${value as string}`);

  const actions = useActions();
  const [isAutomatic, isAutomaticSet] = useState<boolean>();

  const isAutomaticSetF = (value: boolean): void => {
    isAutomaticSet(value);
    value && void (getValue(actions, `${id}Unset`) as CallableModel)();
  };

  return (
    <Accordion
      {...wrapperProps}
      defaultValue={ELEMENT_STATE.ACTIVE}
      title={title}>
      <Wrapper
        flex
        p
        s>
        <SwitchField
          label={t('settings:setAutomatically')}
          onChange={isAutomaticSetF}
          value={isAutomatic}
        />

        {isAutomatic ? cloneElement(element, { elementState: ELEMENT_STATE.DISABLED }) : element}
      </Wrapper>
    </Accordion>
  );
};
