import { useRef, useState } from 'react';

import { type ModalRefModel } from '#lib-frontend/core/components/Modal/Modal.models';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { CreditRatingItemForm } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const CreditRatingForm: LFCModel<CreditRatingFormPropsModel> = ({ data, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [values, valuesSet] = useState<Array<WithIdModel & CreditRatingModel>>([]);
  const ref = useRef<ModalRefModel>(null);

  const handleSubmit = async (value: CreditRatingModel): Promise<void> => {
    console.warn(value);
    valuesSet(withId([...values, value]));
    ref.current?.toggle(false);
  };

  return (
    <MainLayout
      {...wrapperProps}
      s>
      {values.map(({ _agency, id, longTermCategory, longTermWatch }) => (
        <Tile
          key={id}
          title={_agency}>
          <Table
            columns={[{ id: 'name' }, { id: 'value' }]}
            data={[
              { name: 'longTermCategory', value: longTermCategory },
              { name: 'longTermWatch', value: longTermWatch },
            ]}
          />
        </Tile>
      ))}

      <ModalButton
        element={<CreditRatingItemForm onSubmit={handleSubmit} />}
        ref={ref}>
        {t('core:add', { value: t('funding:creditRating') })}
      </ModalButton>
    </MainLayout>
  );
};
