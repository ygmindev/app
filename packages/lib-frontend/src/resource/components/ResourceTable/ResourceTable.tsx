import { type ReactElement, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '#lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceTable = <TType, TForm = undefined, TRoot = undefined>({
  columns,
  filters,
  form,
  service,
  testID,
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
      grow
      s>
      {filters && (
        <ResourceFilterForm<TType, TForm, TRoot>
          filters={filters}
          onSubmit={handleFilter}
        />
      )}

      <Table
        columns={columns}
        data={data ? data.edges.map((edge) => edge.node) : []}
      />

      <Portal>
        <Wrapper
          bottom={0}
          p
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}>
          <Activatable>
            {(isActive) => (
              <Wrapper>
                <Appearable
                  bottom={0}
                  isActive={!isActive}
                  position={SHAPE_POSITION.ABSOLUTE}
                  right={0}
                  zIndex>
                  <Button
                    icon="add"
                    isShadow
                  />
                </Appearable>

                <Appearable
                  bottom={0}
                  isActive={isActive}
                  position={SHAPE_POSITION.ABSOLUTE}
                  right={0}>
                  <ModalButton
                    icon="add"
                    isShadow
                    modal={<WrapperFixture />}>
                    {t('core:add', { value: title && t(title) })}
                  </ModalButton>
                </Appearable>
              </Wrapper>
            )}
          </Activatable>
        </Wrapper>
      </Portal>
    </Wrapper>
  );
};
