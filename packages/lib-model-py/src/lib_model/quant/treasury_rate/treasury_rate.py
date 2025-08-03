from lib_model.resource.entity_resource import EntityResource
from lib_model.quant.treasury_rate.treasury_rate_models import TreasuryRateModel


class TreasuryRate(EntityResource, TreasuryRateModel):
    ...
