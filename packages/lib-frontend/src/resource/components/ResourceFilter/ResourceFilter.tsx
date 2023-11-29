import { type ReactElement, useMemo } from 'react';

import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { type FormFieldModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { TextFilterField } from '#lib-frontend/data/components/TextFilterField/TextFilterField';
import { type ResourceFilterPropsModel } from '#lib-frontend/resource/components/ResourceFilter/ResourceFilter.models';

export const ResourceFilter = <TType,>({
  columns,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType>>
> => {
  const fields = useMemo<Array<FormFieldModel<TType>> | undefined>(
    () =>
      columns?.map(({ id, label, type }) => {
        const element = (() => {
          switch (type) {
            // default:
            //   return <TextField label={label ?? id} />;
            default:
              return <TextFilterField label={label ?? id} />;
          }
        })();
        return { element, id };
      }),
    [columns],
  );
  return (
    <FilterContainer
      {...props}
      fields={fields}
      onSubmit={async (data) => console.warn(data)}
    />
  );
};
