from lib_ai.dataset.xy_text_encoding_dataset import XYTextEncodingDataset
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
        XYTextEncodingDataset,
        _TextEncoderFitParamsModel,
        _TextEncoderEvalParamsModel,
        _TextEncoderPredParamsModel,
    ],
): ...
