import dspy
import ujson

local_filename = "/Users/yoongeemin/Developer/Projects/app/packages/service-ai-py/src/service_ai/ragqa_arena_tech_examples.jsonl"
max_characters = 6000  # for truncating >99th percentile of documents
topk_docs_to_retrieve = 5  # number of documents to retrieve per search query

with open(local_filename) as f:
    corpus = [ujson.loads(line)['text'][:max_characters] for line in f]
    print(f"Loaded {len(corpus)} documents. Will encode them below.")

embedder = dspy.Embedder('openai/text-embedding-3-small', dimensions=512)
search = dspy.retrievers.Embeddings(embedder=embedder, corpus=corpus, k=topk_docs_to_retrieve)



class QuestionAnswer(dspy.Signature):
    """Answer a question based on the given context."""
    context: str = dspy.InputField(desc="The background context to answer the question from.")
    question: str = dspy.InputField(desc="The user's question.")
    response: str = dspy.OutputField(desc="A complete answer to the question based on the context.")


class Model(dspy.Module):
    def __init__(self):
        super().__init__()
        # self.qa = dspy.Predict(QuestionAnswer)
        self.qa = dspy.ChainOfThought(QuestionAnswer)

    def forward(self, question, **kwargs):
        return self.qa(question=question).answer


lm = dspy.LM("ollama_chat/llama3.2", api_base="http://localhost:11434", api_key="")
dspy.configure(lm=lm)

model = Model()
print(model(question="Who is Jeffry Epstein?"))
# dspy.inspect_history(n=1)
