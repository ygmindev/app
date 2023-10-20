import { type ReactElement, useState } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceTable = <TType, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
  columns,
  filters,
  service,
  title,
  ...props
}: LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [data, dataSet] = useState<ConnectionModel<TType> | undefined>();
  const { getConnection } = service;

  const handleFilter = async (data: Array<FilterModel<TType>>): Promise<void> => {
    const result = await getConnection({ filter: data, pagination: { first: 10 } });
    result && dataSet(result.result);
  };

  return (
    <Wrapper
      {...wrapperProps}
      flex
      s>
      {filters && (
        <ResourceFilterForm
          filters={filters}
          onSubmit={handleFilter}
        />
      )}

      <Table
        columns={columns}
        data={data ? data.edges.map((edge) => edge.node) : []}
      />

      <FloatingFooter>
        <ModalButton
          element={
            <FormContainer<TForm>
              fields={columns?.map((column) => {
                const element = (() => {
                  switch (column.type) {
                    default:
                      return <TextField label={column.label ?? column.id} />;
                  }
                })();
                return { element, id: column.id };
              })}
              onSubmit={async (form) => {
                await service.create({ form });
              }}
            />
          }
          icon="add"
          isShadow>
          {t('core:add', { value: title && t(title) })}
        </ModalButton>
      </FloatingFooter>
    </Wrapper>
  );
};
