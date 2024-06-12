import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { TEST_TEXT_SHORT } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FilterButton } from '@lib/frontend/data/components/FilterButton/FilterButton';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { type TableColumnModel } from '@lib/frontend/data/hooks/useTable/useTable.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { ConnectionBoundary } from '@lib/frontend/resource/components/ConnectionBoundary/ConnectionBoundary';
import { ResourceFilter } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import range from 'lodash/range';
import { type ReactElement, useState } from 'react';

export const ResourceTable = <
  TType extends EntityResourceModel,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  fields,
  implementation,
  name,
  rootName,
  ...props
}: LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { create, getConnection, remove } = implementation;
  const [params, paramsSet] = useState<InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>>();

  const handleSubmit = async (
    data: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
  ): Promise<void> => {
    await create(data);
  };

  const columns = fields?.map(({ id, isHidden, label, renderer, width }) => ({
    id,
    isHidden,
    label,
    renderer,
    width,
  })) as Array<TableColumnModel<PartialModel<TType>>>;

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p
      s>
      <Wrapper
        isAlign
        isRow
        justify={FLEX_JUSTIFY.END}>
        <FilterButton
          element={
            <ResourceFilter
              fields={fields}
              name={name}
              onSubmit={async (filter) => paramsSet({ filter })}
              rootName={rootName}
            />
          }
        />

        <ModalButton
          element={() => (
            <ResourceForm<TType, TForm, TRoot>
              fields={fields}
              name={name}
              onSubmit={async (input) => {
                await handleSubmit(input);
              }}
              rootName={rootName}
            />
          )}
          icon="add"
          size={THEME_SIZE.SMALL}>
          {t('core:new', { value: name })}
        </ModalButton>
      </Wrapper>

      <ConnectionBoundary
        fallbackData={
          columns && {
            result: {
              edges: range(5).map((i) => ({
                cursor: `${i}`,
                node: columns.reduce(
                  (result, column) => ({
                    ...result,
                    [column.id]: column.renderer ? undefined : TEST_TEXT_SHORT,
                  }),
                  {} as PartialModel<TType>,
                ),
              })),
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
        params={params}
        query={getConnection}>
        {({ data, elementState, reset }) => (
          <Table<PartialModel<TType>>
            columns={columns}
            data={data?.result?.edges.map((edge) => edge.node)}
            elementState={elementState}
            isRemovable
            onChange={() => {
              void reset();
            }}
            onRemove={async ({ _id }) => {
              void remove({ filter: [{ field: '_id', value: _id }] });
            }}
          />
        )}
      </ConnectionBoundary>
    </Wrapper>
  );
};
