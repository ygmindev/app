import dspy

lm_model_name = "ollama_chat/llama3.2"
embedding_model_name = "ollama/nomic-embed-text"


embedder = dspy.Embedder(embedding_model_name, api_base="http://localhost:11434", api_key="")


class QA(dspy.Signature):
    "Find all Wikipedia titles relevant to verifying (or refuting) the claim."
    claim: str = dspy.InputField(desc="The claim to verify or refute.")
    titles: list[str] = dspy.OutputField(desc="List of Wikipedia titles relevant to verifying (or refuting) the claim.")


lm = dspy.LM(lm_model_name, api_base="http://localhost:11434", api_key="")
dspy.configure(lm=lm)


react = dspy.ReAct(QA, tools=[], max_iters=20)
print(react(claim="David Gregory was born in 1625."))


