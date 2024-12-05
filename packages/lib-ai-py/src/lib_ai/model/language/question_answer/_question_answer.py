# import mlx_lm
from timeit import timeit

import torch
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.language.question_answer._question_answer_models import (
    _QuestionAnswerFitParamsModel,
    _QuestionAnswerModel,
    _QuestionAnswerParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from transformers import AutoModelForQuestionAnswering, AutoTokenizer


class _QuestionAnswer(_QuestionAnswerModel):
    def __init__(self, params: _QuestionAnswerParamsModel) -> None:
        pathname = get_item(params, "pathname")
        self._tokenizer = AutoTokenizer.from_pretrained(pathname)
        self._model = AutoModelForQuestionAnswering.from_pretrained(pathname)

    def predict(
        self,
        dataset: XYMatrixDataset,
    ) -> MatrixData:

        def _test():
            question, context = "Who was Jim Henson?", "Jim Henaher was a nice puppet"
            inputs = self._tokenizer(
                question,
                context,
                return_tensors="pt",
            )
            with torch.no_grad():
                outputs = self._model(**inputs)

            answer_start_index = torch.argmax(outputs.start_logits)
            answer_end_index = torch.argmax(outputs.end_logits)
            predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
            print(self._tokenizer.decode(predict_answer_tokens))

        print(timeit(_test, number=1))
        return MatrixData.from_array([])

    def fit(
        self,
        dataset: XYMatrixDataset,
        params: _QuestionAnswerFitParamsModel | None = None,
    ) -> None: ...
