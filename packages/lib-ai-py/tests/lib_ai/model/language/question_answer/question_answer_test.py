from lib_ai.data.question_data import QuestionData
from lib_ai.dataset.xy_question_answer_dataset import XYQuestionAnswerDataset
from lib_ai.model.language.question_answer import QuestionAnswer


def test_works() -> None:
    model = QuestionAnswer(
        params={"pathname": "distilbert/distilbert-base-uncased-distilled-squad"}
    )

    dataset = XYQuestionAnswerDataset(
        x=QuestionData(
            [
                {
                    "context": "my name is YG and I am 25 years old",
                    "questions": ["how old is YG?", "who am I?"],
                },
            ]
        )
    )
    result = model.predict(dataset)
    print(result.data)
    assert 1 == 1
