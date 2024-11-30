from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.language.base_language.base_language_models import (
    BaseLanguageEvalParamsModel,
    BaseLanguageFitParamsModel,
    BaseLanguageModel,
    BaseLanguageParamsModel,
)


class _QuestionAnswerParamsModel(BaseLanguageParamsModel): ...


class _QuestionAnswerFitParamsModel(BaseLanguageFitParamsModel): ...


class _QuestionAnswerEvalParamsModel(BaseLanguageEvalParamsModel): ...


class _QuestionAnswerModel(
    BaseLanguageModel[
        _QuestionAnswerParamsModel,
        XYMatrixDataset,
        _QuestionAnswerFitParamsModel,
        _QuestionAnswerEvalParamsModel,
    ],
): ...
