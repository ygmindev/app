from lib_ai.data.answer_data import AnswerData
from lib_ai.data.question_data import QuestionData
from lib_ai.dataset.xy_question_answer_dataset import XYQuestionAnswerDataset
from lib_ai.model.language.question_answer import QuestionAnswer


def test_works() -> None:
    pathname = "distilbert/distilbert-base-uncased-distilled-squad"
    model = QuestionAnswer(params={"pathname": pathname})

    dataset = XYQuestionAnswerDataset(
        x=QuestionData(
            [
                {
                    "context": "my name is YG and I am 25 years old",
                    "questions": ["how old is YG?", "who am I?"],
                },
            ],
        ),
        y=AnswerData(
            [
                {"answers": [{"text": "25", "start_index": 22}]},
                {"answers": [{"text": "YG", "start_index": 10}]},
            ]
        ),
    )
    model.fit(dataset)
    result = model.predict(dataset)
    print(result.data)
    assert 1 == 1
