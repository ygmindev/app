from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.text_data import TextData
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
    BaseLanguagePredParamsModel,
)


class _TextEmbeddingParamsModel(BaseLanguageParamsModel): ...


class _TextEmbeddingFitParamsModel(BaseLanguageFitParamsModel): ...


class _TextEmbeddingEvalParamsModel(BaseLanguageEvalParamsModel): ...


class _TextEmbeddingPredParamsModel(BaseLanguagePredParamsModel): ...


class _TextEmbeddingModel(
    BaseLanguageModel[
        _TextEmbeddingParamsModel,
        _TextEmbeddingFitParamsModel,
        _TextEmbeddingEvalParamsModel,
        _TextEmbeddingPredParamsModel,
        TextData,
        MatrixData,
    ],
): ...
