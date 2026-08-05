import polars as pl
from lib_shared.core.utils.private_field.private_field import PrivateField
from sklearn.preprocessing import OrdinalEncoder

from lib_ai.data.table_data.table_data import TableData
from lib_ai.transform.utils.transformer.label_encoder_transformer.label_encoder_transformer_models import (
    LabelEncoderTransformerModel,
    _LabelEncoderTransformerModel,
)


class _LabelEncoderTransformer(_LabelEncoderTransformerModel):
    _encoder: OrdinalEncoder = PrivateField()

    def post_init(self) -> None:
        labels = self.labels or "auto"
        self._encoder = OrdinalEncoder(
            categories=labels,
            handle_unknown="error",
        )

    def fit(
        self,
        data: TableData,
        params: None = None,
    ) -> None:
        self._encoder.fit(data.to_numpy())

    def transform(
        self,
        data: TableData,
        params: None = None,
    ) -> TableData:
        data = TableData(
            data=pl.DataFrame(
                data=self._encoder.transform(data.to_numpy()),
                schema=data.columns,
            )
        )
        return data


class LabelEncoderTransformer(
    _LabelEncoderTransformer,
    LabelEncoderTransformerModel,
): ...
