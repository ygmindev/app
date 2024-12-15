from typing import List, cast

from lib_ai.data.message_data import MessageData
from lib_ai.data.message_data.message_data_models import MessageModel
from lib_ai.data.text_output_data import TextOutputData
from lib_ai.data.text_output_data.text_output_data_models import TextOutputModel
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.language.text_generation._text_generation_models import (
    _TextGenerationFitParamsModel,
    _TextGenerationModel,
    _TextGenerationParamsModel,
    _TextGenerationPredParamsModel,
)
from lib_ai.model.language.text_generation.text_generation_constants import (
    TextGenerationKey,
)
from lib_shared.core.utils.get_item import get_item
from mlx_lm.utils import generate, load
from transformers import PreTrainedTokenizerBase


class _TextGeneration(_TextGenerationModel):
    _messages: List[MessageModel] | None

    def __init__(self, params: _TextGenerationParamsModel) -> None:
        key = get_item(params, "key")
        self._messages = get_item(params, "messages", [])
        match key:
            case TextGenerationKey.LLAMA:
                key = "mlx-community/Meta-Llama-3.1-8B-Instruct-4bit"
            case _:
                key = "mlx-community/Meta-Llama-3.1-8B-Instruct-4bit"
        self._model, self._tokenizer = load(key)

    def predict(
        self,
        data: MessageData,
        params: _TextGenerationPredParamsModel | None = None,
    ) -> TextOutputData:
        max_tokens = get_item(params, "max_tokens", 500)

        def _predict(row: List[MessageModel]) -> TextOutputModel:
            prompt = cast(PreTrainedTokenizerBase, self._tokenizer).apply_chat_template(
                self._messages + row,
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
                    max_tokens=max_tokens,
                )
            }

        return TextOutputData(list(map(_predict, x.data)))

    def fit(
        self,
        dataset: XYDataset[MessageData, MessageData],
        params: _TextGenerationFitParamsModel | None = None,
    ) -> None: ...
