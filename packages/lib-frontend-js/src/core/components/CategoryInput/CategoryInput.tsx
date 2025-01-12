import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import {
  type CategoryInputPropsModel,
  type CategoryInputRefModel,
} from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { forwardRef } from 'react';

export const CategoryInput: RLFCModel<CategoryInputRefModel, CategoryInputPropsModel> = forwardRef(
  ({ defaultValue, emptyLabel, onChange, onSubmit, options, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <Wrapper
        {...wrapperProps}
        flex
        isAlign
        isRow>
        {filterNil([
          emptyLabel && ({ icon: 'times', id: '', label: emptyLabel } as TranslatableOptionModel),
          ...(options ?? []),
        ]).map(({ icon, id, label }) => (
          <Button
            elementState={valueControlled === id ? ELEMENT_STATE.ACTIVE : undefined}
            icon={icon}
            key={id}
            onPress={() => {
              id && valueControlledSet(id);
              onSubmit && onSubmit();
            }}
            type={BUTTON_TYPE.INVISIBLE}>
            {id ?? label}
          </Button>
        ))}
      </Wrapper>
    );
  },
);

process.env.APP_IS_DEBUG && (CategoryInput.displayName = variableName({ CategoryInput }));
