import find from 'lodash/find';
import { useRef, useState } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Image } from '#lib-frontend/core/components/Image/Image';
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
import { CREDIT_RATING_FORM_LOGO_HEIGHT } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.constants';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { CreditRatingItemForm } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
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
  const { getMany } = useRatingAgencyResource();
  const { error } = useNotification();
  const { data: agencies } = useQuery('agencies', async () => getMany({ filter: [] }));
  const modalRef = useRef<ModalRefModel>(null);

  const handleAdd = async (value: CreditRatingModel): Promise<void> => {
    const agencyF = find(values, ({ agency }) => agency?._id === value.agency?._id);
    agencyF
      ? error({ message: t('core:alreadyExists', { value: t('funding:ratingAgency') }) })
      : valuesSet([...values, value]);
    modalRef.current?.toggle(false);
  };

  const handleSubmit = async (): Promise<void> => {
    onSubmit && void onSubmit({ [CREDIT_RATING_RESOURCE_NAME]: values });
  };

  useAsync(async () => {
    await sleep();
    !values.length && modalRef.current?.toggle(true);
  }, []);

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
              {values.map(({ agency, longTermRating, longTermWatch }) => {
                const agencyF = find(agencies?.result, ({ _id }) => _id === agency?._id);
                return (
                  agencyF && (
                    <Tile
                      key={agencyF._id}
                      preview={
                        agencyF.logo ? (
                          <Image
                            height={CREDIT_RATING_FORM_LOGO_HEIGHT}
                            isAutoSize
                            src={agencyF.logo}
                          />
                        ) : undefined
                      }
                      title={agencyF.name}>
                      <Table
                        columns={[{ id: 'name' }, { id: 'value' }]}
                        data={[
                          { name: t('funding:longTermRating'), value: longTermRating },
                          { name: t('funding:longTermWatch'), value: longTermWatch },
                        ]}
                        isHeadless
                      />
                    </Tile>
                  )
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
