from lib_ai.data.answer_data.answer_data_fixtures import (
    ANSWER_DATA_FIXTURE_1,
    ANSWER_DATA_FIXTURE_2,
)


def test_works() -> None:
    result = ANSWER_DATA_FIXTURE_1.concat(ANSWER_DATA_FIXTURE_2)
    assert result.data == [
        *ANSWER_DATA_FIXTURE_1.data,
        *ANSWER_DATA_FIXTURE_2.data,
    ]


# def test_index() -> None:
#     result = ANSWER_DATA_FIXTURE_1[1]
#     assert torch.eq(
#         result.to_tensor(),
#         torch.tensor([[3, 4, 5]]),
#     ).all()

#     result = ANSWER_DATA_FIXTURE_1[[1, 3]]
#     assert torch.eq(
#         result.to_tensor(),
#         torch.tensor(
#             [
#                 [3, 4, 5],
#                 [9, 10, 11],
#             ],
#         ),
#     ).all()

#     result = ANSWER_DATA_FIXTURE_1[1:3]
#     assert torch.eq(
#         result.to_tensor(),
#         torch.tensor(
#             [
#                 [3, 4, 5],
#                 [6, 7, 8],
#             ],
#         ),
#     ).all()


# def test_split() -> None:
#     [train, test] = ANSWER_DATA_FIXTURE_1.split(size=0.8)
#     assert torch.eq(
#         train.to_tensor(),
#         torch.tensor(
#             [
#                 [0, 1, 2],
#                 [3, 4, 5],
#                 [6, 7, 8],
#                 [9, 10, 11],
#             ],
#         ),
#     ).all()

#     assert torch.eq(
#         test.to_tensor(),
#         torch.tensor(
#             [
#                 [12, 13, 14],
#             ],
#         ),
#     ).all()


# def test_shape() -> None:
#     assert ANSWER_DATA_FIXTURE_1.shape == (5, 3)
