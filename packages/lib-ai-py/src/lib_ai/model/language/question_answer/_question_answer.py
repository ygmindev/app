import torch
from lib_ai.data.answer_data import AnswerData
from lib_ai.data.answer_data.answer_data_models import (
    AnswerDataModel,
    AnswerInstanceModel,
    AnswerModel,
)
from lib_ai.data.question_data import QuestionData
from lib_ai.data.question_data.question_data_models import (
    QuestionDataModel,
    QuestionModel,
)
from lib_ai.dataset.xy_question_answer_dataset import XYQuestionAnswerDataset
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
        dataset: XYQuestionAnswerDataset,
    ) -> AnswerData:
        def _predict_row(question: QuestionModel) -> AnswerModel:
            def _predict(x: str) -> AnswerInstanceModel:
                inputs = self._tokenizer(
                    x,
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
                return {"text": self._tokenizer.decode(predict_answer_tokens)}

            context = get_item(question, "context")
            rows = get_item(question, "questions", [])
            return {"answers": list(map(_predict, rows))}

        return AnswerData(list(map(_predict_row, dataset.x.data)))

    def fit(
        self,
        dataset: XYQuestionAnswerDataset,
        params: _QuestionAnswerFitParamsModel | None = None,
    ) -> None: ...
