from lib_ai.model.language.question_answer import QuestionAnswer


def test_works() -> None:
    model = QuestionAnswer(
        params={"pathname": "distilbert/distilbert-base-uncased-distilled-squad"}
    )
    print(model)
    assert 1 == 1
