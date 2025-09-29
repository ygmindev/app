import { LANGUAGES } from '@lib/config/locale/internationalize/internationalize.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { type LanguageInputPropsModel } from '@lib/frontend/locale/components/LanguageInput/LanguageInput.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { useMemo } from 'react';

export const LanguageInput: LFCModel<LanguageInputPropsModel> = ({ elementState, ...props }) => {
  const { currentLanguage, currentLanguageSet, t } = useTranslation([LOCALE]);
  const { wrapperProps } = useLayoutStyles({ props });
  const currentLanguageOption = useMemo(
    () => LANGUAGES.find(({ id }) => id === currentLanguage),
    [currentLanguage],
  );
  return (
    <MenuInput
      {...wrapperProps}
      elementState={elementState}
      icon="language"
      label={t('locale:language')}
      onChange={(value) => {
        void currentLanguageSet(value.id);
      }}
      options={LANGUAGES}
      value={currentLanguageOption}
    />
  );
};
