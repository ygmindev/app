from __future__ import annotations

from datetime import datetime
from typing import Any, List, Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel

from ...billing.PaymentMethod import PaymentMethod as PaymentMethod_1


class Rrr(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
    )
    field_id: Optional[str] = Field(None, alias="_id")
    beforeCreate: None = None
    created: Optional[datetime] = None
    isFixture: Optional[bool] = None
    Access: Optional[Any] = None
    Bank: Optional[Any] = None
    Card: Optional[Any] = None
    linkedUser: Optional[Any] = None
    PaymentMethod: Optional[Any] = None
    callingCode: Optional[str] = None
    email: Optional[str] = None
    first: Optional[str] = None
    last: Optional[str] = None
    paymentMethodPrimary: Optional[PaymentMethod_1.PaymentMethodModel] = None
    phone: Optional[str] = None


class UtilityModel(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
    )
    description: Optional[str] = None
    imageSrc: Optional[str] = None
    name: str
    pricing: Optional[str] = None
    rrr: Optional[Rrr] = None
    type: List[Any]
    url: Optional[str] = None
    field_id: str = Field(..., alias="_id")
    beforeCreate: None = None
    created: datetime
    isFixture: Optional[bool] = None


class Model(RootModel[UtilityModel]):
    root: UtilityModel
