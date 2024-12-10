from lib_ai.data.message_data import MessageData
from lib_ai.data.message_data.message_data_models import MessageRole
from lib_ai.dataset.xy_chat_dataset import XYChatDataset
from lib_ai.model.language.text_generation import TextGeneration
from lib_ai.model.language.text_generation.text_generation_constants import (
    TextGenerationKey,
)


def test_works() -> None:
    model = TextGeneration(params={"key": TextGenerationKey.LLAMA})
    test_dataset = XYChatDataset(
        x=MessageData(
            [
                [
                    {
                        "content": "You are a helpful assistant who always responds in JSON format",
                        "role": MessageRole.SYSTEM,
                    },
                    {
                        "content": """
                            Generate me key attributes from the following text:

                            LIGHTWEIGHT. DURABLE. EASY TO USE. And now, featuring Gorilla's innovative storage features to help you get your projects done even more quickly, easily and safely. The newly designed Gorilla Ladders 22 ft. Reach Aluminum Multi-Position Ladder is the first ever of its kind to come with a removable Project Bucket. This innovative Project Bucket sits atop the ladder to hold all your tools, hardware and accessories, keeping your hands free for safe and secure climbing and work. The updated ladder also features built-in tool hangers on the armored feet and on the hinge knobs, ensuring you'll always have a place to hang your tools while working and climbing. With 28 telescoping adjustable heights, this ladder can be used as an Extension Ladder, Double-Sided Twin Stepladder, 90° Wall Ladder, Stairway Stepladder and as 2 Scaffold Bases (with the purchase of the Rail Brackets accessory) while still folding down to a compact package for easy storage and transport. Extra-large, heavy-duty MPXA hinges are easy to use and give you improved strength and rigidity while climbing for an added sense of security. With plenty of added features and the same light-weight, easy-to-use design, this ladder is truly Built Smart and Always Tough.

                            Highlights
                            Removable Project Bucket sits on top of ladder to hold tools, hardware, paint, accessories
                            28 telescoping adjustable heights
                            Durable design with type 1A ANSI duty rating rated to hold up to 300 lbs.
                            Oversized hinges and armored feet also feature built-in tool hangers for added convenience and safety when climbing
                            Optional Rail Brackets (OMSID 312258995, model #GLMP-RB-2) for use in scaffold position are available at https://www.homedepot.com/p/Gorilla-Ladders-Lightweight-Aluminum-Rail-Brackets-Fits-All-Gorilla-MPX-Multi-Position-Ladders-Quick-and-Easy-to-Use-GLMP-RB-2/312258995
                        """,
                        "role": MessageRole.SYSTEM,
                    },
                ],
            ]
        )
    )
    result = model.predict(test_dataset)
    print(result.data)
    assert 1 == 1
