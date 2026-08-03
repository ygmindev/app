from lib_ai.data.tabular_data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.one_hot_transformer.one_hot_transformer_models import (
    OneHotTransformerModel,
    _OneHotTransformerModel,
)


class _OneHotTransformer(_OneHotTransformerModel):
    def transform(
        self,
        data: TabularData,
    ) -> TabularData:
        data.data = data.to_dataframe().to_dummies(drop_first=self.is_drop_first)
        return data


class OneHotTransformer(
    _OneHotTransformer,
    OneHotTransformerModel,
): ...
