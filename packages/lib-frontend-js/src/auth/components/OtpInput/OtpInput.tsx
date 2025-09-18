import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import {
  type OtpInputPropsModel,
  type OtpInputRefModel,
} from '@lib/frontend/auth/components/OtpInput/OtpInput.models';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, Z_INDEX_ABOVE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withId } from '@lib/shared/core/utils/withId/withId';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';

const OTP_LENGTH = toNumber(process.env.SERVER_APP_OTP_LENGTH);

const IDS = withId(range(OTP_LENGTH));

export const OtpInput: RLFCModel<OtpInputRefModel, OtpInputPropsModel> = ({
  elementState,
  isAutoFocus,
  onBack,
  onChange,
  onElementStateChange,
  onSubmit,
  ref,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation([AUTH]);
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue: '',
    onChange,
    value,
  });
  const { elementStateControlledSet, isActive, isLoading } = useElementStateControlled({
    elementState,
    onElementStateChange,
  });
  return (
    <Wrapper
      {...wrapperProps}
      s>
      <Wrapper
        position={SHAPE_POSITION.RELATIVE}
        s>
        <Wrapper
          isAbsoluteFill
          opacity={0}
          zIndex>
          <TextInput
            defaultValue=""
            isAutoFocus={isAutoFocus}
            isClearable={false}
            keyboard={TEXT_INPUT_KEYBOARD.NUMBER}
            maxLength={OTP_LENGTH}
            onChange={(value) => {
              valueControlledSet(value);
              if (value?.length === OTP_LENGTH) {
                void sleep().then(async () => {
                  valueControlledSet('');
                  onSubmit?.();
                });
              }
            }}
            onElementStateChange={elementStateControlledSet}
            ref={ref}
            size={THEME_SIZE.MEDIUM}
            testID={testID}
            value={valueControlled}
          />
        </Wrapper>

        <Wrapper
          isAlign
          isCenter
          isRow
          position={SHAPE_POSITION.RELATIVE}>
          <Appearable
            isAbsoluteFill
            isActive={isLoading}
            isCenter
            position={SHAPE_POSITION.ABSOLUTE}
            zIndex={Z_INDEX_ABOVE}>
            <Loading size={THEME_SIZE.SMALL} />
          </Appearable>

          {IDS.map(({ id }, i) => (
            <TextInput
              elementState={
                isActive && ((!valueControlled?.length && i === 0) || i === valueControlled?.length)
                  ? ELEMENT_STATE.ACTIVE
                  : undefined
              }
              isCenter
              isClearable={false}
              isDisabled
              key={id}
              size={THEME_SIZE.MEDIUM}
              value={(valueControlled && valueControlled[i]) ?? ''}
              width={theme.shape.size[THEME_SIZE.MEDIUM]}
            />
          ))}
        </Wrapper>
      </Wrapper>

      <Link
        align={FONT_ALIGN.CENTER}
        onPress={onBack}>
        {t('auth:otpDidntGet')}
      </Link>
    </Wrapper>
  );
};
