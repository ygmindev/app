from lib_quant.derivs.models.swap.swap import Swap
from lib_shared.core.utils.field.field import Field

from lib_quant.pricing.models.quote.quote.quote import Quote
from lib_quant.pricing.models.quote.swap_quote.constants import SwapQuoteType


class SwapQuote(Quote[Swap]):
    quote_type: SwapQuoteType | None = Field(default=SwapQuoteType.YIELD)
