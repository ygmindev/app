from typing import List

from lib_ai.data.message_data.message_data_models import MessageModel
from lib_ai.data.text_output_data import TextOutputData
from lib_ai.data.text_output_data.text_output_data_models import TextOutputModel
from lib_ai.dataset.xy_chat_dataset import XYChatDataset
from lib_ai.model.language.text_generation._text_generation_models import (
    _TextGenerationFitParamsModel,
    _TextGenerationModel,
    _TextGenerationParamsModel,
)
from lib_ai.model.language.text_generation.text_generation_constants import (
    TextGenerationKey,
)
from lib_shared.core.utils.get_item import get_item
from mlx_lm.utils import generate, load


class _TextGeneration(_TextGenerationModel):
    def __init__(self, params: _TextGenerationParamsModel) -> None:
        key = get_item(params, "key")
        match key:
            case TextGenerationKey.LLAMA:
                key = "mlx-community/Meta-Llama-3.1-8B-Instruct-4bit"
            case _:
                key = "mlx-community/Meta-Llama-3.1-8B-Instruct-4bit"
        self._model, self._tokenizer = load(key)

    def predict(
        self,
        dataset: XYChatDataset,
    ) -> TextOutputData:
        def _predict(row: List[MessageModel]) -> TextOutputModel:
            prompt = self._tokenizer.apply_chat_template(
                row,
                tokenize=False,
                add_generation_prompt=True,
                add_special_tokens=False,
                verbose=True,
            )
            return {
                "content": generate(
                    self._model,
                    self._tokenizer,
                    prompt=prompt,
                    max_tokens=500,
                )
            }

        return TextOutputData(list(map(_predict, dataset.x.data)))

    def fit(
        self,
        dataset: XYChatDataset,
        params: _TextGenerationFitParamsModel | None = None,
    ) -> None: ...
