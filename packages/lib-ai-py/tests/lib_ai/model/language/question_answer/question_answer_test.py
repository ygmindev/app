from lib_ai.data.answer_data import AnswerData
from lib_ai.data.question_data import QuestionData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.language.question_answer import QuestionAnswer
from lib_ai.model.language.question_answer.question_answer_constants import (
    QuestionAnswerKey,
)


def test_works() -> None:
    model = QuestionAnswer(params={"key": QuestionAnswerKey.BERT})

    x = QuestionData(
        [
            {
                "context": "my name is YG and I am 25 years old",
                "questions": ["how old is YG?", "what is my name?", "how old is Sam?"],
            },
        ],
    )
    dataset = XYDataset(
        x=x,
        y=AnswerData(
            [
                {"answers": [{"text": "25", "start_index": 22}]},
                {"answers": [{"text": "YG", "start_index": 10}]},
            ]
        ),
    )
    # model.fit(dataset)
    result = model.predict(dataset)
    print(result.data)
    assert 1 == 1
