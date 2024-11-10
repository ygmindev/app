from lib_ai.transform.utils.transformer.base_transformer import BaseTransformer
from lib_ai.transform.utils.transformer.label_encoder_transformer._label_encoder_transformer import (
    _LabelEncoderTransformer,
)
from lib_ai.transform.utils.transformer.label_encoder_transformer.label_encoder_transformer_models import (
    LabelEncoderTransformerModel,
)


class LabelEncoderTransformer(
    _LabelEncoderTransformer,
    BaseTransformer,
    LabelEncoderTransformerModel,
):
    pass
