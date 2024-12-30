from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.text_data import TextData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.language.text_embedding._text_embedding_models import (
    _TextEmbeddingFitParamsModel,
    _TextEmbeddingModel,
    _TextEmbeddingParamsModel,
    _TextEmbeddingPredParamsModel,
)
from sentence_transformers import SentenceTransformer
from torch import Tensor


class _TextEmbedding(_TextEmbeddingModel):
    def __init__(self, params: _TextEmbeddingParamsModel) -> None:
        self._model = SentenceTransformer("mixedbread-ai/mxbai-embed-large-v1")

    def predict(
        self,
        data: TextData,
        params: _TextEmbeddingPredParamsModel | None = None,
    ) -> MatrixData:
        def _predict(row: str) -> Tensor:
            return self._model.encode(row)

        return MatrixData(list(map(_predict, data.data)))

    def fit(
        self,
        dataset: XYDataset[TextData, MatrixData],
        params: _TextEmbeddingFitParamsModel | None = None,
    ) -> None: ...
