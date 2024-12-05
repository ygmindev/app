import torch
from lib_ai.data.question_answer_data import QuestionAnswerData
from lib_ai.data.question_answer_data.question_answer_data_models import (
    QAModel,
    QARowModel,
)
from lib_ai.dataset.xy_question_answer_dataset import XYQuestionAnswerDataset
from lib_ai.model.language.question_answer._question_answer_models import (
    _QuestionAnswerFitParamsModel,
    _QuestionAnswerModel,
    _QuestionAnswerParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.not_found_exception import NotFoundException
from transformers import AutoModelForQuestionAnswering, AutoTokenizer


class _QuestionAnswer(_QuestionAnswerModel):
    def __init__(self, params: _QuestionAnswerParamsModel) -> None:
        pathname = get_item(params, "pathname")
        self._tokenizer = AutoTokenizer.from_pretrained(pathname)
        self._model = AutoModelForQuestionAnswering.from_pretrained(pathname)

    def predict(
        self,
        dataset: XYQuestionAnswerDataset,
    ) -> QuestionAnswerData:
        def _predict_row(row: QARowModel) -> QARowModel:
            def _predict(x: QAModel) -> QAModel:
                question = get_item(x, "question")
                inputs = self._tokenizer(
                    question,
                    context,
                    return_tensors="pt",
                )
                with torch.no_grad():
                    outputs = self._model(**inputs)
                answer_start_index = torch.argmax(outputs.start_logits)
                answer_end_index = torch.argmax(outputs.end_logits)
                predict_answer_tokens = inputs.input_ids[
                    0, answer_start_index : answer_end_index + 1
                ]
                return {"answer": self._tokenizer.decode(predict_answer_tokens)}

            context = get_item(row, "context")
            rows = get_item(row, "rows", [])
            return {"rows": list(map(_predict, rows))}

        return QuestionAnswerData(list(map(_predict_row, dataset.x.data)))

    def fit(
        self,
        dataset: XYQuestionAnswerDataset,
        params: _QuestionAnswerFitParamsModel | None = None,
    ) -> None: ...
