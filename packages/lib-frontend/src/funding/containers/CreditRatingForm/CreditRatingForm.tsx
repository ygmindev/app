import find from 'lodash/find';
import { useRef, useState } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { type ModalRefModel } from '#lib-frontend/core/components/Modal/Modal.models';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { CreditRatingItemForm } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const CreditRatingForm: LFCModel<CreditRatingFormPropsModel> = ({
  elementState,
  initialValues,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const [values, valuesSet] = useState(
    (initialValues && initialValues[CREDIT_RATING_RESOURCE_NAME]) ?? [],
  );
  const modalRef = useRef<ModalRefModel>(null);

  const handleAdd = async (value: CreditRatingModel): Promise<void> => {
    valuesSet([...values, value]);
    modalRef.current?.toggle(false);
  };

  const handleSubmit = async (): Promise<void> => {
    onSubmit && void onSubmit({ [CREDIT_RATING_RESOURCE_NAME]: values });
  };

  useAsync(async () => {
    await sleep();
    !values.length && modalRef.current?.toggle(true);
  }, []);

  const { getMany } = useRatingAgencyResource();
  const { data: agencies } = useQuery('agencies', async () => getMany({ filter: [] }));
  return (
    <>
      <FormContainer
        {...wrapperProps}
        elementState={elementState}
        onComplete={onComplete}
        onError={onError}
        onSubmit={handleSubmit}
        onSuccess={onSuccess}
        topElement={() =>
          values.length ? (
            <Wrapper s>
              {values.map(({ agency, longTermCategory, longTermWatch }) => {
                const agencyName = find(agencies?.result, ({ _id }) => _id === agency?._id);
                return (
                  <Tile
                    key={agency?._id}
                    title={agencyName?.name}>
                    <Table
                      columns={[{ id: 'name' }, { id: 'value' }]}
                      data={[
                        { name: t('funding:longTermCategory'), value: longTermCategory },
                        { name: t('funding:longTermWatch'), value: longTermWatch },
                      ]}
                    />
                  </Tile>
                );
              })}
            </Wrapper>
          ) : (
            <Text type={FONT_TYPE.HEADLINE}>{t('funding:noCreditRatingMessage')}</Text>
          )
        }
      />

      <FloatingFooter>
        <ModalButton
          element={<CreditRatingItemForm onSubmit={handleAdd} />}
          elementState={elementState}
          icon="add"
          ref={modalRef}>
          {t('core:add', { value: t('funding:creditRating') })}
        </ModalButton>
      </FloatingFooter>
    </>
  );
};
