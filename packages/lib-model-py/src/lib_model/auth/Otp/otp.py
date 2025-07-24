from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, RootModel


class OtpModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    callingCode: Optional[str] = None
    email: Optional[str] = None
    otp: Optional[str] = None
    phone: Optional[str] = None
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[OtpModel]):
    root: OtpModel
