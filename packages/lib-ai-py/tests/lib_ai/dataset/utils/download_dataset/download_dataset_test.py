from lib_ai.dataset.utils.download_dataset import download_dataset


def test_works() -> None:
    pathname = download_dataset(
        name="nikhil7280/student-performance-multiple-linear-regression",
        path="regression",
        filename="Student_Performance.csv",
    )
    print(pathname)
    assert 1 == 1
