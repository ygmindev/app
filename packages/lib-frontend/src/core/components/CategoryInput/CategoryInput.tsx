import { type ItemInputPropsModel } from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { PressableItem } from '@lib/frontend/core/components/PressableItem/PressableItem';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import isFunction from 'lodash/isFunction';
import range from 'lodash/range';

export const CategoryInput: LFCModel<ItemInputPropsModel> = ({ id, options, ...props }) =>
  isFunction(options) ? (
    <DataBoundary
      fallbackData={range(3).map((i) => ({ id: `${i}`, label: '' }))}
      id={id}
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
  );

const CategoryInputResult: LFCModel<
  Omit<ItemInputPropsModel, 'id' | 'options'> & { options?: Array<TranslatableOptionModel> }
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
      isVerticalScrollable>
      {filterNil([
        emptyLabel && ({ icon: 'times', id: '', label: emptyLabel } as TranslatableOptionModel),
        ...(options ?? []),
      ]).map(({ icon, id, image, label }) => (
        <PressableItem
          elementState={valueControlled === id ? ELEMENT_STATE.ACTIVE : undefined}
          icon={icon}
          image={image}
          key={id}
          onPress={() => {
            id && valueControlledSet(id);
            onSubmit && onSubmit();
          }}
          title={label}
        />
      ))}
    </Wrapper>
  );
};
