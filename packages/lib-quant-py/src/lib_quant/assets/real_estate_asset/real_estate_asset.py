import datetime

from lib_shared.core.utils.field.field import Field

from lib_quant.assets.base_asset.base_asset import BaseAsset
from lib_quant.assets.real_estate_asset.constants import RealEstatePropertyType


class RealEstateAsset(BaseAsset):
    date_built: datetime.date | None = Field(default=None)
    msa: str | None = Field(default=None)
    net_operating_income: float = Field(default=0.0)
    occupancy: float | None = Field(default=None)
    property_type: RealEstatePropertyType
    square_footage: float | None = Field(default=None)

    def cap_rate(self) -> float:
        value = self.value
        if value <= 0:
            raise ValueError("property value must be positive")
        net_operating_income = self.net_operating_income
        return net_operating_income / value
