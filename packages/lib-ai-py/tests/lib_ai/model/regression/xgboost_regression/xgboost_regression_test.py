from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.utils.download_dataset import download_dataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.regression.xgboost_regression import XgboostRegression
from lib_ai.optimize.utils.optimize.optimize_constants import OptimizeSpaceDistribution
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
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
    x, y = data.drop_columns([y_column]), data[y_column]
    x = pipeline.fit_transform(x).to_matrix()
    trainset, testset = XYMatrixDataset(x=x, y=y).split()
    trainset, validationset = trainset.split()
    model = XgboostRegression()

    # result = model.cv(
    #     params={"scorer": scorer},
    #     instance_params={},
    #     dataset=validationset,
    #     kfold_params={"n_splits": 5},
    # )

    # Before hyperparameter optimization
    model.fit(trainset)
    model.evaluate(testset)

    model.optimize(
        params={
            "n_trials": 100,
            "spaces": (
                {
                    "n_estimators": (
                        OptimizeSpaceDistribution.Q_UNIFORM,
                        {"lower": 50, "upper": 100},
                    ),
                    "max_depth": (
                        OptimizeSpaceDistribution.Q_UNIFORM,
                        {"lower": 3, "upper": 10},
                    ),
                    "subsample": (
                        OptimizeSpaceDistribution.UNIFORM,
                        {"lower": 0.5, "upper": 1.0},
                    ),
                },
            ),
        },
        instance_params={},
        dataset=validationset,
        kfold_params={"n_splits": 5},
    )

    # After hyperparameter optimization
    model.fit(trainset)
    scores = model.evaluate(testset)
    assert scores[model.scorer.name] <= 5
