import { type ReactElement } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FilterButton } from '#lib-frontend/data/components/FilterButton/FilterButton';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { ConnectionBoundary } from '#lib-frontend/resource/components/ConnectionBoundary/ConnectionBoundary';
import { ResourceFilter } from '#lib-frontend/resource/components/ResourceFilter/ResourceFilter';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type PartialModel } from '#lib-shared/core/core.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const ResourceTable = <TType, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
  columns,
  name,
  service,
  ...props
}: LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { getConnection } = service;

  return (
    <Wrapper {...wrapperProps}>
      <FilterButton element={<ResourceFilter columns={columns} />} />

      <ConnectionBoundary
        fallbackData={
          columns && {
            result: {
              edges: [
                {
                  cursor: '',
                  node: columns.reduce(
                    (result, column) => ({ ...result, [column.id]: 'test' }),
                    {} as PartialModel<TType>,
                  ),
                },
                {
                  cursor: '',
                  node: columns.reduce(
                    (result, column) => ({ ...result, [column.id]: 'test' }),
                    {} as PartialModel<TType>,
                  ),
                },
              ],
              pageInfo: {
                endCursor: '',
                hasNextPage: false,
                hasPreviousPage: false,
                startCursor: '',
              },
            },
          }
        }
        flex
        id={name}
        query={async () => {
          await sleep(1000);
          return {};
        }}>
        {({ data }) => (
          <Table<PartialModel<TType>>
            columns={columns}
            data={data?.result?.edges.map((edge) => edge.node)}
          />
        )}
      </ConnectionBoundary>

      <FloatingFooter>
        <ModalButton
          element={() => (
            <FormContainer
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
                // TODO: type form better?
                await service.create({ form: form as unknown as TForm });
              }}
            />
          )}
          icon="add"
          isShadow>
          {t('core:new', { value: name })}
        </ModalButton>
      </FloatingFooter>
    </Wrapper>
  );
};
