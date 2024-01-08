import { forwardRef } from 'react';

import {
  type RoutesFieldPropsModel,
  type RoutesFieldRefModel,
} from '#lib-frontend/aroom/components/RoutesField/RoutesField.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { DraggableList } from '#lib-frontend/core/components/DraggableList/DraggableList';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { AddressField } from '#lib-frontend/map/components/AddressField/AddressField';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const RoutesField: RLFCModel<RoutesFieldRefModel, RoutesFieldPropsModel> = forwardRef(
  ({ onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: [{ id: 'from' }, { id: 'to' }],
      onChange,
      value,
    });
    return (
      <Wrapper
        {...wrapperProps}
        s>
        <DraggableList
          element={({ item }, i) => (
            <AddressField
              icon="location"
              key={item.id}
              label={
                i === 0 ? 'From' : i === (valueControlled?.length ?? 0) - 1 ? 'To' : `Stop ${i}`
              }
            />
          )}
          s
          value={valueControlled ?? []}
        />

        <Button
          icon="add"
          onPress={() =>
            valueControlledSet([
              ...(valueControlled ?? []),
              { id: `stop-${valueControlled?.length}` },
            ])
          }
          type={BUTTON_TYPE.INVISIBLE}>
          {t('aroom:addStop')}
        </Button>
      </Wrapper>
    );
  },
);
