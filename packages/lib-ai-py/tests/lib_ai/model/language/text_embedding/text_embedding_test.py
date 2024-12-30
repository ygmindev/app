from lib_ai.data.text_data import TextData
from lib_ai.model.language.text_embedding import TextEmbedding


def test_works() -> None:
    model = TextEmbedding({})
    result = model.predict(
        TextData(
            data=[
                "test 1",
                "test 2",
            ]
        )
    )
    print(result.data)
    assert 1 == 1
