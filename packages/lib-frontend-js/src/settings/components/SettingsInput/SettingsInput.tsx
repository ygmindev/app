import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type SettingsInputPropsModel } from '@lib/frontend/settings/components/SettingsInput/SettingsInput.models';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { cloneElement, type ReactElement } from 'react';

export const SettingsInput = <TType = string,>({
  element,
  id,
  title,
  ...props
}: LFCPropsModel<SettingsInputPropsModel<TType>>): ReactElement<
  LFCPropsModel<SettingsInputPropsModel<TType>>
> => {
  useTranslation([SETTINGS]);
  const { wrapperProps } = useLayoutStyles({ props });
  const [value, valueSet] = useStore(id);
  return (
    <Tile
      {...wrapperProps}
      title={title}>
      <Wrapper
        flex
        p
        s>
        {cloneElement(element, {
          onChange: valueSet as (value: TType) => void,
          value: value as TType,
        })}
      </Wrapper>
    </Tile>
  );
};
