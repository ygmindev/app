import datetime

import numpy as np
import pandas as pd
import xlwings as xw
from lib_shared.core.utils.base_model.base_model import BaseModel


class SimulationResult(BaseModel):
    values: np.ndarray
    dates: list[datetime.date]

    @property
    def df(self) -> pd.DataFrame:
        data = self.values.T
        return pd.DataFrame(
            data,
            index=pd.Index(self.dates, name="date"),
            columns=[f"#{i + 1}" for i in range(data.shape[1])],
        )

    def export(
        self,
        file_path: str,
    ) -> None:
        wb = xw.Book(file_path)
        sheet = wb.sheets.active
        sheet.range("A1").value = self.df
