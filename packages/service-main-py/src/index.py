import asyncio

from lib_quant.curve.benchmark_yield_curve.benchmark_yield_curve import (
    BenchmarkYieldCurve,
)
from lib_quant.curve.ois_curve.ois_curve import OisCurve
from lib_quant.datetime.utils.period.period import Period
from lib_quant.instruments.fixed_income.credit.credit.constants import AmortizationType
from lib_quant.instruments.fixed_income.credit.fixed_rate_credit.fixed_rate_credit import (
    FixedRateCredit,
)
from lib_quant.instruments.fixed_income.credit.floating_rate_credit.floating_rate_credit import (
    FloatingRateCredit,
)
from lib_quant.pricing.utils.pricing_engine.credit_pricing_engine.credit_pricing_engine import (
    CreditPricingEngine,
)
from lib_quant.pricing.utils.quote.credit_quote.constants import CreditQuoteType
from lib_quant.pricing.utils.quote.credit_quote.credit_quote import CreditQuote
from lib_quant.pricing.utils.quote.swap_quote.constants import SwapQuoteType
from lib_quant.pricing.utils.quote.swap_quote.swap_quote import SwapQuote
from lib_quant.rates.daily_sofr.daily_sofr import DailySofr
from lib_quant.rates.rate.rate import Rate
from lib_quant.swap.ois.ois import Ois
from lib_shared.core.utils.base_model.base_model import BaseModel


async def run_agent() -> None:
    BaseModel.rebuild()

    ois_curve = OisCurve()
    ois_curve.fit(
        quotes=[
            SwapQuote(
                asset=Ois(tenor=Period(years=1)),
                quote_type=SwapQuoteType.YIELD,
                value=0.01,
            ),
            SwapQuote(
                asset=Ois(tenor=Period(years=40)),
                quote_type=SwapQuoteType.YIELD,
                value=0.10,
            ),
        ]
    )
    benchmark_yield_curve = BenchmarkYieldCurve()
    benchmark_yield_curve.fit(
        tenors=[Period(years=1), Period(years=40)],
        rates=[0.01, 0.10],
    )
    bond = FixedRateCredit(
        tenor=Period(years=10),
        coupon=0.05,
        amortization_type=AmortizationType.INTEREST_ONLY,
    )
    bond = FloatingRateCredit(
        tenor=Period(years=10),
        rate=Rate(
            benchmark=DailySofr(curve=ois_curve),
            spread=0.05,
        ),
        curve=ois_curve,
    )

    print("\n\n\n@@@@ cashflows")
    print(bond.cashflows().df)
    print("\n\n\n@@@@")

    pe = CreditPricingEngine(
        swap_curve=ois_curve,
        benchmark_yield_curve=benchmark_yield_curve,
    )

    quote = CreditQuote(
        asset=bond,
        quote_type=CreditQuoteType.YIELD,
        value=0.05,
    )

    result = pe.convert(quote, CreditQuoteType.PRICE)
    print("\n\n\n@@@@ PRICING")
    print(result)
    print("\n\n\n@@@@")


def main():
    asyncio.run(run_agent())


if __name__ == "__main__":
    main()

# import asyncio

# from lib_ai.agent.utils.agent import Agent
# from lib_ai.agent.utils.agent.agent import DirectedAcyclicGraph
# from lib_ai.agent.utils.agent.agent_models import AgentState
# from lib_ai.graph.constants import GraphNodeType
# from lib_ai.graph.utils.agent_node.agent_node import AgentNode
# from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
# from lib_ai.model.llm import Llm
# from lib_shared.core.utils.base_model.base_model import BaseModel


# async def run_agent() -> None:
#     BaseModel.rebuild()
#     llm = Llm()

#     class MyState(AgentState): ...

#     initial_state = MyState()

#     dag = DirectedAcyclicGraph(
#         initial_state=initial_state,
#         nodes=[
#             AgentNode(
#                 name="agent1",
#                 prompt="what's your name?",
#                 agent=Agent(
#                     name="agent1",
#                     descriptions=[
#                         "You are a chatbot developed in South Korea.",
#                         "Always provide direct, concise answers in 1 to 3 sentences maximum. Do not ramble.",
#                     ],
#                     llm=llm,
#                     initial_state=initial_state,
#                 ),
#             ),
#         ],
#         edges=[
#             GraphEdge(start=GraphNodeType.START, end="agent1"),
#             GraphEdge(start="agent1", end=GraphNodeType.END),
#         ],
#     )

#     async for item in dag.stream(initial_state):
#         print("\n", item.delta)


# def main():
#     asyncio.run(run_agent())


# if __name__ == "__main__":
#     main()
