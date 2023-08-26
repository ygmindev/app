import { RadioField } from '#lib-frontend/core/components/RadioField/RadioField';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type RangeFieldPropsModel } from '#lib-frontend/form/components/RangeField/RangeField.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const RangeField: SFCModel<RangeFieldPropsModel> = ({ testID, type, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <RadioField
        isHorizontal
        options={[
          { icon: 'target', id: 'value', label: ({ t }) => t('core:value') },
          { icon: 'range', id: 'range', label: ({ t }) => t('core:range') },
        ]}
      />
    </Wrapper>
  );
};
