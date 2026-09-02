from enum import StrEnum


class CreditQuoteType(StrEnum):
    PRICE = "price"
    YIELD = "yield"
    T_SPREAD = "t_spread"
    G_SPREAD = "g_spread"
    Z_SPREAD = "z_spread"
