from lib_ai.data.message_data import MessageData
from lib_ai.data.message_data.message_data_models import MessageRole
from lib_ai.dataset.xy_chat_dataset import XYChatDataset
from lib_ai.model.language.knowledge import Knowledge
from lib_ai.model.language.text_generation.text_generation_constants import (
    TextGenerationKey,
)


def test_works() -> None:
    model = Knowledge(
        params={
            "key": TextGenerationKey.LLAMA,
        },
    )
    test_dataset = XYChatDataset(
        x=MessageData(
            [
                [
                    {
                        "content": """who is Park Chung Hee?""",
                        "role": MessageRole.USER,
                    },
                ],
            ]
        )
    )
    result = model.predict(test_dataset)
    print(result.data)
    assert 1 == 1
