from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable import Transformable


class _OneHotTransformer(Transformable[TableData, None]):
    is_drop_first: bool = False

    def transform(
        self,
        data: TableData,
    ) -> TableData:
        data.data = data.to_dataframe().to_dummies(drop_first=self.is_drop_first)
        return data


class OneHotTransformer(
    _OneHotTransformer,
): ...
