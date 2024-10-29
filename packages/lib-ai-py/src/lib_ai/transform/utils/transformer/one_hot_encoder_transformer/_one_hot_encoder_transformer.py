from lib_ai.transform.utils.transformer.one_hot_encoder_transformer._one_hot_encoder_transformer_models import (
    _OneHotEncoderTransformerDatasetModel,
    _OneHotEncoderTransformerModel,
)


class _OneHotEncoderTransformer(_OneHotEncoderTransformerModel):
    def transform(
        self,
        dataset: _OneHotEncoderTransformerDatasetModel,
    ) -> _OneHotEncoderTransformerDatasetModel:
        dataset.x.data = dataset.x.to_dataframe().to_dummies()
        return dataset
