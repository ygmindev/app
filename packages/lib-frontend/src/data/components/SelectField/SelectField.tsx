import { type ReactElement } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Circle } from '#lib-frontend/core/components/Circle/Circle';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type SelectFieldPropsModel } from '#lib-frontend/data/components/SelectField/SelectField.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { SearchField } from '#lib-frontend/search/components/SearchField/SearchField';
import { useSearch } from '#lib-frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';

export const SelectField = <TType extends string | Array<string>>({
  defaultValue,
  isMultiple,
  isSearchable,
  onChange,
  options,
  value,
  ...props
}: LFCPropsModel<SelectFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<SelectFieldPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const { query, result, search } = useSearch({
    keys: ['label', 'id'],
    list: options.map(({ label, ...option }) => ({ ...option, label: t(label) })),
  });
  return (
    <Wrapper
      {...wrapperProps}
      s>
      {isSearchable && (
        <SearchField
          onChange={search}
          value={query}
        />
      )}

      <Wrapper
        isRowAlign
        isWrap>
        {result.map(({ id, label }) => {
          const isActive = isMultiple ? value?.includes(id) : value === id;
          return (
            <Button
              icon={isActive ? 'checkCircle' : 'minusCircle'}
              key={id}
              leftElement={
                <Circle
                  border
                  borderColor={THEME_COLOR.PRIMARY}
                  size={THEME_SIZE_MORE.XSMALL}
                />
              }
              mBottom={THEME_SIZE.SMALL}
              onPress={() => {
                if (isMultiple) {
                  const valueF = isActive
                    ? (valueControlled as Array<string>)?.filter((v) => v !== id)
                    : [...(valueControlled ?? []), id];
                  (valueF ?? []).sort();
                  return valueControlledSet(valueF as TType);
                }
                return valueControlledSet(id as TType);
              }}
              size={THEME_SIZE.SMALL}
              type={isActive ? BUTTON_TYPE.FILLED : BUTTON_TYPE.TRANSPARENT}>
              {label}
            </Button>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};
