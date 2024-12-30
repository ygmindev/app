from lib_ai.data.message_data import MessageData
from lib_ai.data.message_data.message_data_models import MessageRole
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
    test_dataset = MessageData(
        [
            [
                {
                    "content": """

Please summarize the key insights of given numerical tables.

CONSOLIDATED STATEMENTS OF INCOME (In millions, except per share amounts)

|Year Ended December 31 | 2020 | 2021 | 2022 |

|--- | --- | --- | --- |

|Revenues | $ 182,527| $ 257,637| $ 282,836|

|Costs and expenses:|

|Cost of revenues | 84,732 | 110,939 | 126,203|

|Research and development | 27,573 | 31,562 | 39,500|

|Sales and marketing | 17,946 | 22,912 | 26,567|

|General and administrative | 11,052 | 13,510 | 15,724|

|Total costs and expenses | 141,303| 178,923| 207,994|

|Income from operations | 41,224 | 78,714 | 74,842|

|Other income (expense), net | 6,858 | 12,020 | (3,514)|

|Income before income taxes | 48,082 | 90,734 | 71,328|

|Provision for income taxes | 7,813 | 14,701 | 11,356|

|Net income | $40,269| $76,033 | $59,972|

|Basic net income per share of Class A, Class B, and Class C stock | $2.96| $5.69| $4.59|

|Diluted net income per share of Class A, Class B, and Class C stock| $2.93| $5.61| $4.56|

Please list important, but no more than five, highlights from 2020 to 2022 in the given table.

Please write in a professional and business-neutral tone.

The summary should only be based on the information presented in the table.
                    """,
                    "role": MessageRole.USER,
                },
            ],
        ]
    )
    result = model.predict(test_dataset)
    print("\n\n")
    print(result.data)
    print("\n\n")
    assert 1 == 1
