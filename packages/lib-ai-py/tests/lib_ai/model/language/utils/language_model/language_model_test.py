from lib_ai.model.language.utils.language_model import LanguageModel


def test_works() -> None:
    model = LanguageModel(
        params={
            "pathname": "mlx-community/Meta-Llama-3.1-8B-Instruct-4bit",
        }
    )
    print(model._model)
