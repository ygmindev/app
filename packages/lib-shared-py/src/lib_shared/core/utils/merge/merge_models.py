from typing import Tuple

type MergeParamsModel[T: dict] = Tuple[T | None, T | None]

type MergeModel[T: dict] = T
