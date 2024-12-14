import numpy as np
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.message_data import MessageData
from lib_ai.data.message_data.message_data_models import MessageRole
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_chat_dataset import XYChatDataset
from lib_ai.model.language.text_generation import TextGeneration
from lib_ai.model.language.text_generation.text_generation_constants import (
    TextGenerationKey,
)
from sentence_transformers import SentenceTransformer, util
from sentence_transformers.quantization import quantize_embeddings
from sentence_transformers.util import cos_sim
from sklearn.metrics.pairwise import cosine_similarity


def test_works() -> None:
    model = SentenceTransformer("mixedbread-ai/mxbai-embed-large-v1")

    docs = [
        """
            Lionel Andrés "Leo" Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] ⓘ; born 24 June 1987), is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players of all time, Messi set numerous records for individual accolades won throughout his professional footballing career such as eight Ballon d'Or awards and eight times being named the world's best player by FIFA.[note 2] He is the most decorated player in the history of professional football having won 45 team trophies,[note 3] including twelve Big Five league titles, four UEFA Champions Leagues, two Copa Américas, and one FIFA World Cup. Messi holds the records for most European Golden Shoes (6), most goals for a single club (672, with Barcelona), most goals (474), hat-tricks (36) and assists (192) in La Liga, most matches played (39), assists (18) and goal contributions (34) in the Copa América, most matches played (26) and goal contributions (21) in the World Cup, most international appearances (191) and international goals (112) by a South American male, and the second-most in the latter category outright. A prolific goalscorer and creative playmaker, Messi has scored over 850 senior career goals for club and country.
        """,
        """
            Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. Having won the 2024 presidential election as the nominee of the Republican Party, he is the president-elect and is scheduled to be inaugurated as the 47th president on January 20, 2025.
        """,
        """
            On 3 December 2024, at 22:27 Korea Standard Time (KST), Yoon Suk Yeol, the president of South Korea, declared martial law during a televised address.
            In his declaration, Yoon accused the Democratic Party (DPK), which has a majority in the National Assembly, of conducting "anti-state activities" and collaborating with "North Korean communists" to destroy the country, thereby creating a "legislative dictatorship".
            The order prohibited political activities, including gatherings of the National Assembly and local legislatures, and suspended the free press.
            Separately, Yoon reportedly ordered the arrest of various political opponents, including the leaders of the DPK and his own People Power Party (PPP).
            This event was widely characterized by Korean politicians and news organizations, both international and domestic, as an attempted self-coup.
        """,
    ]
    docs = [doc.strip() for doc in docs]
    docs_embedded = model.encode(docs, convert_to_tensor=True)

    def search(
        query: str,
        k: int = 3,
    ):
        embedded = model.encode(query, convert_to_tensor=True)
        similarities = util.pytorch_cos_sim(embedded, docs_embedded)[0]
        index = similarities.argmax().item()
        print(f"@@@ {index}")
        return ""

    result = search("who is trump?", k=5)
    print(result)


# def test_works() -> None:
#     model = TextGeneration(params={"key": TextGenerationKey.LLAMA})
#     test_dataset = XYChatDataset(
#         x=MessageData(
#             [
#                 [
#                     {
#                         # "content": "You are a helpful assistant who always responds in JSON format",
#                         "content": "You are a helpful assistant",
#                         "role": MessageRole.SYSTEM,
#                     },
#                     # {
#                     #     "content": """
#                     #         Generate me key attributes from the following text:
#                     #         LIGHTWEIGHT. DURABLE. EASY TO USE. And now, featuring Gorilla's innovative storage features to help you get your projects done even more quickly, easily and safely. The newly designed Gorilla Ladders 22 ft. Reach Aluminum Multi-Position Ladder is the first ever of its kind to come with a removable Project Bucket. This innovative Project Bucket sits atop the ladder to hold all your tools, hardware and accessories, keeping your hands free for safe and secure climbing and work. The updated ladder also features built-in tool hangers on the armored feet and on the hinge knobs, ensuring you'll always have a place to hang your tools while working and climbing. With 28 telescoping adjustable heights, this ladder can be used as an Extension Ladder, Double-Sided Twin Stepladder, 90° Wall Ladder, Stairway Stepladder and as 2 Scaffold Bases (with the purchase of the Rail Brackets accessory) while still folding down to a compact package for easy storage and transport. Extra-large, heavy-duty MPXA hinges are easy to use and give you improved strength and rigidity while climbing for an added sense of security. With plenty of added features and the same light-weight, easy-to-use design, this ladder is truly Built Smart and Always Tough.
#                     #         Highlights
#                     #         Removable Project Bucket sits on top of ladder to hold tools, hardware, paint, accessories
#                     #         28 telescoping adjustable heights
#                     #         Durable design with type 1A ANSI duty rating rated to hold up to 300 lbs.
#                     #         Oversized hinges and armored feet also feature built-in tool hangers for added convenience and safety when climbing
#                     #         Optional Rail Brackets (OMSID 312258995, model #GLMP-RB-2) for use in scaffold position are available at https://www.homedepot.com/p/Gorilla-Ladders-Lightweight-Aluminum-Rail-Brackets-Fits-All-Gorilla-MPX-Multi-Position-Ladders-Quick-and-Easy-to-Use-GLMP-RB-2/312258995
#                     #     """,
#                     #     "role": MessageRole.SYSTEM,
#                     # },
#                     {
#                         "content": """
#                             what is current time?
#                         """,
#                         "role": MessageRole.USER,
#                     },
#                 ],
#             ]
#         )
#     )
#     result = model.predict(test_dataset)
#     print(result.data)
#     assert 1 == 1
