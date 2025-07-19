import datetime

from pydantic import BaseModel


class SecurityModel(BaseModel):
    """ Base class for all securities. """
    issue_date: datetime.date
    settlement_days: int = 2

    class Config:
        arbitrary_types_allowed = True
