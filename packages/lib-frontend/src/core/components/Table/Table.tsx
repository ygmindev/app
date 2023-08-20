import { type ReactElement } from 'react';

import { type TablePropsModel } from '#lib-frontend/core/components/Table/Table.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useTable } from '#lib-frontend/data/hooks/useTable/useTable';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const Table = <TType,>({
  testID,
  ...props
}: SFCPropsModel<TablePropsModel<TType>>): ReactElement<SFCPropsModel<TablePropsModel<TType>>> => {
  const { styles } = useStyles({ props });
  const { headers, rows } = useTable(props);
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Wrapper
        border={DIRECTION.BOTTOM}
        isRowAlign
        p={THEME_SIZE.SMALL}>
        {headers.map(({ id, label, width }) => (
          <Wrapper
            key={id}
            width={width}>
            <Text
              isBold
              isEllipsis>
              {label}
            </Text>
          </Wrapper>
        ))}
      </Wrapper>

      <Wrapper grow>
        {rows.map(({ cells, id }) => (
          <Wrapper
            isRowAlign
            key={id}>
            {cells.map(({ id, value, width }) => (
              <Wrapper
                key={id}
                p={THEME_SIZE.SMALL}
                width={width}>
                <Text isEllipsis>{value}</Text>
              </Wrapper>
            ))}
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
