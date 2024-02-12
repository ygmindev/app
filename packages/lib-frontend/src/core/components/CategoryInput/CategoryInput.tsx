import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import {
  type CategoryInputPropsModel,
  type CategoryInputRefModel,
} from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type LFCModel,
  type RLFCModel,
  type TranslatableOptionModel,
} from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import isFunction from 'lodash/isFunction';
import range from 'lodash/range';
import { forwardRef } from 'react';

export const CategoryInput: RLFCModel<CategoryInputRefModel, CategoryInputPropsModel> = forwardRef(
  ({ id, options, ...props }, _) =>
    isFunction(options) ? (
      <DataBoundary
        fallbackData={range(3).map((i) => ({ id: `${i}`, label: '' }))}
        id={id ?? ''}
        isBlocking
        query={options}>
        {({ data }) => (
          <CategoryInputResult
            {...props}
            options={data ?? []}
          />
        )}
      </DataBoundary>
    ) : (
      <CategoryInputResult
        {...props}
        options={options}
      />
    ),
);

const CategoryInputResult: LFCModel<
  Omit<CategoryInputPropsModel, 'id' | 'options'> & {
    options?: Array<TranslatableOptionModel>;
  }
> = ({ defaultValue, emptyLabel, onChange, onSubmit, options, value, ...props }) => {
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
          type={BUTTON_TYPE.TRANSPARENT}>
          {id ?? label}
        </Button>
      ))}
    </Wrapper>
  );
};
