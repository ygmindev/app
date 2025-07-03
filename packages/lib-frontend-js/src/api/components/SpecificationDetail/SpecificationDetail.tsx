import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { type SpecificationDetailPropsModel } from '@lib/frontend/api/components/SpecificationDetail/SpecificationDetail.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';
import { type ReactElement } from 'react';

export const SpecificationDetail = <TType,>({
  specification,
  ...props
}: LFCPropsModel<SpecificationDetailPropsModel<TType>>): ReactElement<
  LFCPropsModel<SpecificationDetailPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      align={FLEX_ALIGN.START}>
      <Text isBold>{specification.name}</Text>

      {specification.fields.map((field) => {
        const isProperty = field.type === FIELD_TYPE.PROPERTY;
        return (
          <Accordion
            isTransparent
            key={field.id}
            size={THEME_SIZE.SMALL}
            title={
              <Wrapper
                isAlign
                isRow>
                <Text>{field.id}</Text>

                <Chip
                  color={isProperty ? THEME_COLOR.SECONDARY : undefined}
                  icon={isProperty ? (field.isArray ? 'documents' : 'document') : 'pencil'}>
                  {isProperty ? field.specification?.name : field.type}
                </Chip>
              </Wrapper>
            }>
            <Wrapper
              border
              mLeft
              p
              round>
              {field.specification && isProperty && (
                <SpecificationDetail specification={field.specification} />
              )}
            </Wrapper>
          </Accordion>
        );
      })}
    </Wrapper>
  );
};
