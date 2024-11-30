from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.language.question_answer._question_answer_models import (
    _QuestionAnswerFitParamsModel,
    _QuestionAnswerModel,
    _QuestionAnswerParamsModel,
)
from lib_shared.core.utils.get_item import get_item


class _QuestionAnswer(_QuestionAnswerModel):
    def __init__(self, params: _QuestionAnswerParamsModel) -> None:
        pathname = get_item(params, "pathname")
        # self._instance = XGBRegressor(
        #     # objective="reg:linear",
        #     learning_rate=learning_rate,
        #     max_depth=max_depth,
        #     n_estimators=n_estimators,
        #     subsample=subsample,
        # )

    def predict(
        self,
        dataset: XYMatrixDataset,
    ) -> MatrixData:
        return MatrixData(data=[])

    def fit(
        self,
        dataset: XYMatrixDataset,
        params: _QuestionAnswerFitParamsModel | None = None,
    ) -> None: ...
