from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.one_hot_transformer.one_hot_transformer_models import (
    OneHotTransformerModel,
    _OneHotTransformerModel,
)


class _OneHotTransformer(_OneHotTransformerModel):
    def transform(
        self,
        data: TableData,
    ) -> TableData:
        data.data = data.to_dataframe().to_dummies(drop_first=self.is_drop_first)
        return data


class OneHotTransformer(
    _OneHotTransformer,
    OneHotTransformerModel,
): ...
