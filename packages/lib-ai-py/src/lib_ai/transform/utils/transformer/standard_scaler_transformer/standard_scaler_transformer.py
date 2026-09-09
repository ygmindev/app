import polars as pl

from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable import Transformable


class _StandardScalerTransformer(Transformable[TableData, None]):
    def transform(
        self,
        data: TableData,
    ) -> TableData:
        data.data = data.to_dataframe().select(
            (pl.all() - pl.all().mean()) / pl.all().std()
        )
        return data


class StandardScalerTransformer(
    _StandardScalerTransformer,
): ...
