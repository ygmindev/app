from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.text_data import TextData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.language.text_encoder._text_encoder_models import (
    _TextEncoderFitParamsModel,
    _TextEncoderModel,
    _TextEncoderParamsModel,
    _TextEncoderPredParamsModel,
)
from sentence_transformers import SentenceTransformer
from torch import Tensor


class _TextEncoder(_TextEncoderModel):
    def __init__(self, params: _TextEncoderParamsModel) -> None:
        self._model = SentenceTransformer("mixedbread-ai/mxbai-embed-large-v1")

    def predict(
        self,
        data: TextData,
        params: _TextEncoderPredParamsModel | None = None,
    ) -> MatrixData:
        def _predict(row: str) -> Tensor:
            return self._model.encode(row)

        return MatrixData(list(map(_predict, data.data)))

    def fit(
        self,
        dataset: XYDataset[TextData, MatrixData],
        params: _TextEncoderFitParamsModel | None = None,
    ) -> None: ...
