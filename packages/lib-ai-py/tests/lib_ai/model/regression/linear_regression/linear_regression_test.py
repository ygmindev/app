from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.utils.download_dataset import download_dataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.regression.linear_regression import LinearRegression
from lib_ai.transform.utils.pipeline.table_pipeline import TablePipeline
from lib_ai.transform.utils.transformer.one_hot_encoder_transformer import (
    OneHotEncoderTransformer,
)
from lib_ai.transform.utils.transformer.standard_scaler_transformer import (
    StandardScalerTransformer,
)


def test_works() -> None:
    pathname = download_dataset(
        name="nikhil7280/student-performance-multiple-linear-regression",
        path="regression",
        filename="Student_Performance.csv",
    )
    # pathname = from_working("_cache/datasets/regression/Student_Performance.csv")
    data = TabularData.from_csv(pathname)

    pipeline = TablePipeline(
        transformers=(
            (["Extracurricular Activities"], OneHotEncoderTransformer(is_sparse=True)),
            (
                [
                    "Hours Studied",
                    "Previous Scores",
                    "Sleep Hours",
                    "Sample Question Papers Practiced",
                ],
                StandardScalerTransformer(),
            ),
        )
    )
    y_column = "Performance Index"
    x, y = data.drop([y_column]), data[y_column]
    x = pipeline.fit_transform(x)
    trainset, testset = XYMatrixDataset(x=x.to_matrix(), y=y).split()
    model = LinearRegression(n_in=x.shape[1])
    model.fit(trainset)
    scores = model.evaluate(testset)
    assert scores["mean_squared_error"] <= 5
