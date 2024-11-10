from lib_ai.dataset.utils.download_dataset import download_dataset


def test_works() -> None:
    download_dataset(
        name="nikhil7280/student-performance-multiple-linear-regression",
        path="regression",
    )
    assert 1 == 1
