from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.utils.download_dataset import download_dataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.classification.logistic_regression import LogisticRegression
from lib_ai.transform.utils.pipeline.table_pipeline import TablePipeline
from lib_ai.transform.utils.transformer.standard_scaler_transformer import (
    StandardScalerTransformer,
)


def test_works() -> None:
    pathname = download_dataset(
        name="dileep070/heart-disease-prediction-using-logistic-regression",
        path="classification",
        filename="framingham.csv",
    )
    data = TabularData.from_csv(pathname).drop_na()
    pipeline = TablePipeline(
        transformers=(
            (
                [
                    "age",
                    "BMI",
                    "cigsPerDay",
                    "diaBP",
                    "education",
                    "glucose",
                    "heartRate",
                    "sysBP",
                    "totChol",
                ],
                StandardScalerTransformer(),
            ),
        )
    )
    y_column = "TenYearCHD"
    x, y = data.drop_columns([y_column]), data[y_column]
    x = pipeline.fit_transform(x)
    trainset, testset = XYMatrixDataset(x=x.to_matrix(), y=y).split()
    model = LogisticRegression(
        n_in=x.shape[1],
        n_classes=2,
    )
    model.fit(trainset)
    scores = model.evaluate(testset)
    assert scores["accuracy"] >= 0.8
