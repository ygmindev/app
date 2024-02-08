import {
  type RoutesInputPropsModel,
  type RoutesInputRefModel,
} from '@lib/frontend/aroom/components/RoutesInput/RoutesInput.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { DraggableList } from '@lib/frontend/core/components/DraggableList/DraggableList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import {
  type AddressInputRefModel,
  type AddressOptionModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { uid } from '@lib/shared/core/utils/uid/uid';
import cloneDeep from 'lodash/cloneDeep';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const RoutesInput: RLFCModel<RoutesInputRefModel, RoutesInputPropsModel> = forwardRef(
  ({ onChange, value, ...props }, ref) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation();
    const inputRef = useRef<AddressInputRefModel>(null);
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: [
        { id: '0', latitude: 0, longitude: 0 },
        { id: '1', latitude: 1, longitude: 1 },
      ],
      onChange,
      value,
    });

    useImperativeHandle(ref, () => ({
      ...inputRef.current,
      beforeSubmit: async () =>
        valueControlled?.map(({ latitude, longitude }) => ({
          latitude,
          longitude,
        })),
      reset: () => null,
    }));

    return (
      <Wrapper
        {...wrapperProps}
        s>
        <DraggableList<AddressOptionModel>
          element={({ item }, i) => (
            <AddressInput
              icon="location"
              key={item.id}
              label={
                i === 0 ? 'From' : i === (valueControlled?.length ?? 0) - 1 ? 'To' : `Stop ${i}`
              }
              onChange={(v) => {
                const valueNew = cloneDeep(valueControlled) ?? [];
                valueNew[i] = v;
                valueControlledSet(valueNew);
              }}
              ref={inputRef}
              value={valueControlled?.[i]}
            />
          )}
          onChange={valueControlledSet}
          s
          value={valueControlled}
        />

        <Button
          icon="add"
          onPress={() =>
            valueControlledSet([
              ...(valueControlled ?? []),
              {
                id: uid(),
                latitude: valueControlled?.length ?? 0,
                longitude: valueControlled?.length ?? 0,
              },
            ])
          }
          type={BUTTON_TYPE.INVISIBLE}>
          {t('aroom:addStop')}
        </Button>
      </Wrapper>
    );
  },
);
