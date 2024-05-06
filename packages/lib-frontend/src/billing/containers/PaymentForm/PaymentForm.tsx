import {
  type PaymentFormPropsModel,
  type PaymentFormStepModel,
} from '@lib/frontend/billing/containers/PaymentForm/PaymentForm.models';
import { PaymentMethodInput } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputRefModel } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useRef } from 'react';

export const PaymentForm: LFCModel<PaymentFormPropsModel> = ({
  data,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const ref = useRef<PaymentMethodInputRefModel>(null);

  const handleSubmit = async (data: PaymentFormStepModel): Promise<void> => {
    ref.current?.submit && (await ref.current.submit());
    onSubmit && (await onSubmit(data));
  };

  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <PaymentMethodInput
              products={data?.products}
              ref={ref}
            />
          ),
          id: 'paymentMethodId',
        },
      ]}
      onSubmit={handleSubmit}
      onSuccess={onSuccess}
    />
  );
};

// import { BILLING } from '@lib/frontend/billing/billing.constants';
// import { NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput';
// import { type NewPaymentMethodInputRefModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
// import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
// import { type PaymentFormPropsModel } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm.models';
// import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
// import { Button } from '@lib/frontend/core/components/Button/Button';
// import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
// import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
// import { type LFCModel } from '@lib/frontend/core/core.models';
// import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
// import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { THEME_COLOR } from '@lib/frontend/style/style.constants';
// import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
// import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
// import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
// import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
// import { type PartialModel } from '@lib/shared/core/core.models';
// import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
// import { useRef, useState } from 'react';

// export const PaymentForm: LFCModel<PaymentFormPropsModel> = ({ data, onSuccess, ...props }) => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   const { t } = useTranslation([BILLING]);
//   const [tab, tabSet] = useState<string>('saved');
//   const [paymentMethod, paymentMethodSet] = useState<PartialModel<PaymentMethodModel>>();
//   const ref = useRef<NewPaymentMethodInputRefModel>(null);
//   const currentUser = useCurrentUser();
//   const { createToken } = usePaymentMethodResource();
//   const [isComplete, isCompleteSet] = useState<boolean>();

//   const products = data?.products as Array<ProductItemModel>;
//   const price = products && getPrice(products);

//   const handleSubmit = async (): Promise<void> => {
//     if (products) {
//       switch (tab) {
//         case 'saved': {
//           paymentMethod &&
//             (await createToken({
//               form: { paymentMethodId: paymentMethod.externalId, products },
//               root: currentUser?._id,
//             }));
//         }
//         case 'new': {
//           await ref.current?.submit();
//         }
//       }
//       onSuccess && (await onSuccess());
//     } else {
//       throw new InvalidArgumentError('no products to submit');
//     }
//   };

//   const elementState =
//     (tab === 'saved' && !paymentMethod) || (tab === 'new' && isComplete)
//       ? ELEMENT_STATE.DISABLED
//       : undefined;

//   const handleTabChange = (v: string): void => {
//     tabSet(v);
//     isCompleteSet(false);
//   };

//   return (
//     <MainLayout
//       {...wrapperProps}
//       s>
//       <Tabs
//         onChange={handleTabChange}
//         tabs={[
//           {
//             icon: 'bookmark',
//             id: 'saved',
//             label: t('billing:savedPaymentMethod_plural'),
//           },
//           { icon: 'add', id: 'new', label: t('billing:newPaymentMethod') },
//         ]}
//         value={tab}
//       />

//       {tab === 'saved' && (
//         <SavedPaymentMethodInput
//           onChange={paymentMethodSet}
//           value={paymentMethod}
//         />
//       )}

//       {tab === 'new' && (
//         <NewPaymentMethodInput
//           items={['test']}
//           onChange={({ isComplete: v }) => isCompleteSet(v)}
//           price={price}
//           ref={ref}
//         />
//       )}

//       <Button
//         color={THEME_COLOR.SUCCESS}
//         elementState={elementState}
//         icon="lock"
//         onPress={handleSubmit}>
//         {/* TODO: locale price formatter */}
//         {/* {t('billing:pay', { value: numberFormat(price.value, { currency: price.currency }) })} */}
//         {t('billing:pay', { value: price })}
//       </Button>
//     </MainLayout>
//   );
// };
