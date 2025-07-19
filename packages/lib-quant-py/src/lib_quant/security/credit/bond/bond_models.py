import datetime

from pydantic import BaseModel

from lib_quant.security.security_models import SecurityModel


class CallFeature(BaseModel):
    """ Call feature in a bond. """
    date: datetime.date
    price: float = 100.0


class BondModel(SecurityModel):
    """ Base class for bonds. """
    call_schedule: list[CallFeature] = []
    face_value: float = 100.0
