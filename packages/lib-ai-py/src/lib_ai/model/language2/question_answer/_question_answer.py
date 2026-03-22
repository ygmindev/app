import numpy as np
import torch
from datasets import Dataset
from lib_ai.core.utils.get_device import get_device
from lib_ai.data.answer_data import AnswerData
from lib_ai.data.answer_data.answer_data_models import AnswerInstanceModel, AnswerModel
from lib_ai.data.question_data import QuestionData
from lib_ai.data.question_data.question_data_models import QuestionModel
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.language.question_answer._question_answer_models import (
    _QuestionAnswerFitParamsModel,
    _QuestionAnswerModel,
    _QuestionAnswerParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.not_found_exception import NotFoundException
from transformers import (
    AutoModelForQuestionAnswering,
    AutoTokenizer,
    Trainer,
    TrainingArguments,
)

device = get_device()


class _QuestionAnswer(_QuestionAnswerModel):
    def __init__(self, params: _QuestionAnswerParamsModel) -> None:
        key = get_item(params, "key")
        pathname = "distilbert/distilbert-base-uncased-distilled-squad"

        self._tokenizer = AutoTokenizer.from_pretrained(pathname)
        self._model = AutoModelForQuestionAnswering.from_pretrained(pathname).to(device)

    def predict(
        self,
        data: QuestionData,
    ) -> AnswerData:
        def _predict_row(question: QuestionModel) -> AnswerModel:
            def _predict(x: str) -> AnswerInstanceModel:
                inputs = self._tokenizer(
                    x,
                    context,
                    return_tensors="pt",
                ).to(device)
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

        return AnswerData(list(map(_predict_row, data.data)))

    def fit(
        self,
        dataset: XYDataset[QuestionData, AnswerData],
        params: _QuestionAnswerFitParamsModel | None = None,
    ) -> None:
        max_length = get_item(params, "max_length", 384)
        stride = get_item(params, "stride", 128)
        pad_right = self._tokenizer.padding_side == "right"

        questions, contexts = np.array(
            [
                [question, get_item(x, "context", None)]
                for x in dataset.x.data
                for question in x["questions"]
            ]
        ).transpose()

        inputs = self._tokenizer(
            list(questions if pad_right else contexts),
            list(contexts if pad_right else questions),
            max_length=max_length,
            return_offsets_mapping=True,
            return_overflowing_tokens=True,
            stride=stride,
            return_tensors="pt",
            truncation="only_second" if pad_right else "only_first",
            padding="max_length",
        ).to(device)

        sample_mapping = inputs.pop("overflow_to_sample_mapping")
        offset_mapping = inputs.pop("offset_mapping")

        if dataset.y is None:
            raise NotFoundException("y")

        answers = dataset.y.data
        start_positions, end_positions = [], []

        for i, offset in enumerate(offset_mapping):
            sample_idx = sample_mapping[i]
            answer = answers[sample_idx]["answers"][0]
            text = get_item(answer, "text")
            start_index = get_item(answer, "start_index")
            end_index = start_index + len(text)
            sequence_ids = inputs.sequence_ids(i)

            i = 0
            while sequence_ids[i] != (1 if pad_right else 0):
                i += 1
            context_start = i
            while sequence_ids[i] == (1 if pad_right else 0):
                i += 1
            context_end = i - 1

            if offset[context_start][0] > start_index or offset[context_end][1] < end_index:
                start_positions.append(0)
                end_positions.append(0)
            else:
                i = context_start
                while i <= context_end and offset[i][0] <= start_index:
                    i += 1
                start_positions.append(i - 1)
                i = context_end
                while i >= context_start and offset[i][1] >= end_index:
                    i -= 1
                end_positions.append(i + 1)

        inputs["start_positions"] = start_positions
        inputs["end_positions"] = end_positions

        args = TrainingArguments(
            "bert-finetuned-squad",
            evaluation_strategy="no",
            save_strategy="no",
            learning_rate=2e-5,
            num_train_epochs=5,
            weight_decay=0.01,
            fp16=False,
        )
        trainer = Trainer(
            model=self._model,
            args=args,
            train_dataset=Dataset.from_dict(dict(inputs)),
            # eval_dataset=validation_dataset,
            # tokenizer=self._tokenizer,
        )
        trainer.train()
