import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type MultiSelectFieldPropsModel } from '#lib-frontend/data/components/MultiSelectField/MultiSelectField.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { SearchField } from '#lib-frontend/search/components/SearchField/SearchField';
import { useSearch } from '#lib-frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const MultiSelectField: LFCModel<MultiSelectFieldPropsModel> = ({
  defaultValue,
  onChange,
  options,
  value,
  ...props
}) => {
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
      <SearchField
        onChange={search}
        value={query}
      />

      <Wrapper
        isRowAlign
        isWrap>
        {result.map(({ id, label }) => {
          const isActive = value?.includes(id);
          return (
            <Button
              icon={isActive ? 'check' : 'add'}
              key={id}
              mBottom={THEME_SIZE.SMALL}
              onPress={() => {
                const valueF = isActive
                  ? valueControlled?.filter((v) => v !== id)
                  : [...(valueControlled ?? []), id];
                (valueF ?? []).sort();
                return valueControlledSet(valueF);
              }}
              type={isActive ? BUTTON_TYPE.FILLED : BUTTON_TYPE.TRANSPARENT}>
              {label}
            </Button>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};
