from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.text_data import TextData
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
    BaseLanguagePredParamsModel,
)


class _TextEncoderParamsModel(BaseLanguageParamsModel): ...


class _TextEncoderFitParamsModel(BaseLanguageFitParamsModel): ...


class _TextEncoderEvalParamsModel(BaseLanguageEvalParamsModel): ...


class _TextEncoderPredParamsModel(BaseLanguagePredParamsModel): ...


class _TextEncoderModel(
    BaseLanguageModel[
        _TextEncoderParamsModel,
        _TextEncoderFitParamsModel,
        _TextEncoderEvalParamsModel,
        _TextEncoderPredParamsModel,
        TextData,
        MatrixData,
    ],
): ...
