import { useState } from 'react';

import { type SFCModel } from '#lib-frontend/core/core.models';
import { SelectField } from '#lib-frontend/data/components/SelectField/SelectField';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const DevPage: SFCModel<DevPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [isOpen, isOpenSet] = useState<boolean | undefined>(false);
  return (
    <>
      <SelectField
        label={''}
        options={[{ id: '1' }, { id: '2' }]}
      />
    </>
  );
};
