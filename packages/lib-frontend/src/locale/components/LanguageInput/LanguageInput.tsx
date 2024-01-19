import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { type LanguageInputPropsModel } from '@lib/frontend/locale/components/LanguageInput/LanguageInput.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const LanguageInput: LFCModel<LanguageInputPropsModel> = ({ elementState, ...props }) => {
  const { currentLanguage, currentLanguageSet, t } = useTranslation([LOCALE]);
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <DropdownInput
      {...wrapperProps}
      elementState={elementState}
      icon="language"
      label={t('locale:language')}
      onChange={(value) => {
        void currentLanguageSet(value);
      }}
      options={INTERNATIONALIZE_CONFIG.languages}
      value={currentLanguage}
    />
  );
};
