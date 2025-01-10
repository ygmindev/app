import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { type DroppableRefModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormFieldsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextFilterInput } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type ResourceFilterPropsModel } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import isNil from 'lodash/isNil';
import reduce from 'lodash/reduce';
import { type ReactElement, useRef } from 'react';

export const ResourceFilter = <TType, TKey extends StringKeyModel<TType>>({
  field,
  onSubmit,
  values,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType, TKey>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType, TKey>>
> => {
  const { t } = useTranslation();
  const ref = useRef<DroppableRefModel>(null);

  const getFields = (): Array<FormFieldsModel<TType>> => {
    const labelF = field.label ?? field.id;
    const element = (() => {
      switch (field.type) {
        case DATA_TYPE.NUMBER:
          // case NUMBER_UNIT_TYPE.AMOUNT:
          // case NUMBER_UNIT_TYPE.RELATIVE_DATE:
          return (
            <NumberRangeInput
              beforeSubmit={async (v, field) =>
                filterNil([
                  !!v?.min && {
                    condition: FILTER_CONDITION.GRATER_THAN_EQUAL,
                    field,
                    value: v.min,
                  },
                  !!v?.max && {
                    condition: FILTER_CONDITION.LESS_THAN_EQUAL,
                    field,
                    value: v.max,
                  },
                ])
              }
              rangeType={NUMBER_RANGE_TYPE.RANGE}
            />
          );
        default:
          return field.options ? (
            <SelectInput
              beforeSubmit={async (v, k) => [
                { condition: FILTER_CONDITION.IN, field: k, value: v },
              ]}
              isMultiple={field.isArray}
              options={field.options ?? []}
            />
          ) : (
            <TextFilterInput
              defaultValue={values?.[0]?.value as string}
              isValueOnly
              label={labelF}
            />
          );
      }
    })();
    return [{ fields: [{ element, id: field.id }], id: field.id }];
  };

  const handleSubmit = async (filters: TType): Promise<void> => {
    ref.current?.toggle(false);
    await sleep();
    void onSubmit(
      reduce(
        filters as Record<StringKeyModel<TType>, Array<FilterModel<TType>>>,
        (result, v, k) => (isNil(v) ? result : { ...result, [k]: v }),
        {} as Record<StringKeyModel<TType>, Array<FilterModel<TType>>>,
      ),
    );
  };

  return (
    <Droppable
      anchor={() => (
        <Button
          icon="filter"
          rightElement={
            <Wrapper
              isRow
              s={THEME_SIZE.SMALL}>
              <Divider isVertical />

              <Wrapper
                isAlign
                isRow>
                {values && (
                  <Text
                    casing={TEXT_CASING.NONE}
                    color={THEME_COLOR.SECONDARY}
                    isBold>
                    {values.map((v) => v.value).join(', ')}
                  </Text>
                )}
              </Wrapper>
            </Wrapper>
          }
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.TRANSPARENT}>
          {field.label ?? field.id}
        </Button>
      )}
      direction={DIRECTION.BOTTOM}
      ref={ref}>
      <FormContainer
        {...props}
        cancelLabel={t('resource:clearFilters')}
        fields={getFields()}
        onCancel={
          values
            ? () => {
                void handleSubmit({ [field.id]: [] } as TType);
              }
            : undefined
        }
        onSubmit={handleSubmit}
      />
    </Droppable>
  );
};
