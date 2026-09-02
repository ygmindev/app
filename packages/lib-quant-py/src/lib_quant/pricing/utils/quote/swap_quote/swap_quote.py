from lib_shared.core.utils.field.field import Field

from lib_quant.pricing.utils.quote.quote.quote import Quote
from lib_quant.pricing.utils.quote.swap_quote.constants import SwapQuoteType
from lib_quant.swap.swap.swap import Swap


class SwapQuote(Quote[Swap]):
    quote_type: SwapQuoteType | None = Field(default=SwapQuoteType.YIELD)
