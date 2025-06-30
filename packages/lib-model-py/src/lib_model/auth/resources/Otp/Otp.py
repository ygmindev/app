from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class OtpModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    callingCode: Optional[str] = None
    email: Optional[str] = None
    otp: Optional[str] = None
    phone: Optional[str] = None
    field_id: str = Field(..., alias='_id')
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[OtpModel]):
    root: OtpModel
