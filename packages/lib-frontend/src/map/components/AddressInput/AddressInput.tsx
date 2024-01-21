import { type RLFCModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import {
  type AddressInputPropsModel,
  type AddressInputRefModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { forwardRef, useState } from 'react';

export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = forwardRef(
  ({ defaultValue, isAutoFocus, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const [textValue, textValueSet] = useState<string>();

    const [data, dataSet] = useState<Array<TranslatableOptionModel>>([]);
    const query = async (v?: string): Promise<void> => {
      await sleep(500);
      dataSet([
        { id: 'test1', label: 'test1' },
        { id: 'test2', label: 'test2' },
      ]);
    };

    return (
      <DropdownInput
        {...wrapperProps}
        icon="location"
        isAutoFocus={isAutoFocus}
        label={label}
        onChange={textValueSet}
        onTextChange={(v) => {
          void query(v);
        }}
        options={data}
        rightElement={() => null}
        value={textValue}
      />
    );
  },
);

// import { type RLFCModel } from '@lib/frontend/core/core.models';
// import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
// import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
// import {
//   type AddressInputPropsModel,
//   type AddressInputRefModel,
//   type AddressOptionModel,
// } from '@lib/frontend/map/components/AddressInput/AddressInput.models';
// import { useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { forwardRef, useState } from 'react';

// export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = forwardRef(
//   ({ defaultValue, isAutoFocus, label, onChange, value, ...props }, _) => {
//     const { wrapperProps } = useLayoutStyles({ props });
//     const { data, query } = useMapQuery();
//     const { valueControlled, valueControlledSet } = useValueControlled({
//       defaultValue,
//       onChange,
//       value,
//     });
//     const [textValue, textValueSet] = useState<string>();
//     return (
//       <DropdownInput<AddressOptionModel>
//         {...wrapperProps}
//         icon="location"
//         isAutoFocus={isAutoFocus}
//         label={label}
//         onChange={textValueSet}
//         onTextChange={(v) => {
//           void query(v);
//         }}
//         options={data}
//         rightElement={() => null}
//         value={textValue}
//       />
//     );
//   },
// );
