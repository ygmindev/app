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
import { FocusableWrapper } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withId } from '@lib/shared/core/utils/withId/withId';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';
import { forwardRef } from 'react';

const otpLength = toNumber(process.env.SERVER_APP_OTP_LENGTH);

const IDS = withId(range(otpLength));

export const OtpInput: RLFCModel<OtpInputRefModel, OtpInputPropsModel> = forwardRef(
  (
    { elementState, onBack, onChange, onElementStateChange, onSubmit, testID, value, ...props },
    ref,
  ) => {
    const { t } = useTranslation([AUTH]);
    const { wrapperProps } = useLayoutStyles({ props });
    const theme = useTheme();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: '',
      onChange,
      value,
    });
    const { elementStateControlled, elementStateControlledSet, isActive, isLoading } =
      useElementStateControlled({ elementState, onElementStateChange });

    return (
      <Wrapper
        {...wrapperProps}
        isCenter
        isFullWidth
        s>
        <FocusableWrapper
          elementState={elementStateControlled}
          isOverflowHidden
          isRow
          pHorizontal
          position={SHAPE_POSITION.RELATIVE}>
          <Appearable
            isAbsoluteFill
            isActive={isLoading}
            isCenter
            position={SHAPE_POSITION.ABSOLUTE}
            zIndex={2}>
            <Loading size={THEME_SIZE.SMALL} />
          </Appearable>

          <Wrapper
            isAbsoluteFill
            opacity={0}
            zIndex={1}>
            <TextInput
              defaultValue=""
              isNoClear
              keyboard={TEXT_INPUT_KEYBOARD.NUMBER}
              maxLength={otpLength}
              onChange={(value) => {
                valueControlledSet(value);
                if (value?.length === otpLength) {
                  void sleep().then(onSubmit);
                }
              }}
              onElementStateChange={elementStateControlledSet}
              ref={ref}
              size={THEME_SIZE.MEDIUM}
              testID={testID}
              value={valueControlled}
            />
          </Wrapper>

          {IDS.map(({ id }, i) => (
            <Wrapper
              key={id}
              position={SHAPE_POSITION.RELATIVE}>
              <TextInput
                elementState={elementStateControlled}
                isCenter
                isNoClear
                isTransparent
                size={THEME_SIZE.MEDIUM}
                value={(valueControlled && valueControlled[i]) ?? ''}
                width={theme.shape.size[THEME_SIZE.MEDIUM]}
              />

              <Wrapper
                animation={{
                  states: {
                    [ELEMENT_STATE.ACTIVE]: {
                      backgroundColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
                    },
                    [ELEMENT_STATE.INACTIVE]: { backgroundColor: theme.color.border },
                  },
                }}
                bottom={0}
                elementState={
                  isActive && i === Math.min((valueControlled ?? '').length, otpLength - 1)
                    ? ELEMENT_STATE.ACTIVE
                    : ELEMENT_STATE.INACTIVE
                }
                height={1}
                left={0}
                m={THEME_SIZE.SMALL}
                position={SHAPE_POSITION.ABSOLUTE}
                right={0}
              />
            </Wrapper>
          ))}
        </FocusableWrapper>

        <Link
          align={FONT_ALIGN.CENTER}
          onPress={onBack}>
          {t('auth:otpDidntGet')}
        </Link>
      </Wrapper>
    );
  },
);
