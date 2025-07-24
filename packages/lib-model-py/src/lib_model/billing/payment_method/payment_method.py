from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Optional

from pydantic import BaseModel, ConfigDict, RootModel


class PAYMENTMETHODTYPE(Enum):
    BANK = 'bank'
    CARD = 'card'


class PaymentMethodModel(BaseModel):
    model_config = ConfigDict(
        extra='allow',
    )
    externalId: str
    fingerprint: str
    isPrimary: Optional[bool] = None
    last4: str
    name: str
    type: PAYMENTMETHODTYPE
    field_id: str
    created: datetime
    isFixture: Optional[bool] = None
    beforeCreate: None = None


class Model(RootModel[PaymentMethodModel]):
    root: PaymentMethodModel
