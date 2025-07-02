from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field, RootModel


class PAYMENTMETHODTYPE(Enum):
    bank = 'bank'
    card = 'card'


class PaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    type: PAYMENTMETHODTYPE
    field_id: str = Field(..., alias='_id')
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[PaymentMethodModel]):
    root: PaymentMethodModel
