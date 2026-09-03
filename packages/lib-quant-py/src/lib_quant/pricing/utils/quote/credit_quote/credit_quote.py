from lib_shared.core.utils.field.field import Field

from lib_quant.instruments.fixed_income.credit.credit.credit import Credit
from lib_quant.pricing.utils.quote.credit_quote.constants import (
    CreditQuoteType,
)
from lib_quant.pricing.utils.quote.quote.quote import Quote


class CreditQuote(Quote[Credit]):
    quote_type: CreditQuoteType | None = Field(default=CreditQuoteType.PRICE)
