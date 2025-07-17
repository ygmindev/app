import random

import dspy
import ujson
from dspy.evaluate import SemanticF1
from dspy.utils import download


class QuestionAnswer(dspy.Signature):
    """Generates accurate answer based on question"""
    question: str = dspy.InputField()
    response: str = dspy.OutputField()


class Model(dspy.Module):
    def __init__(self):
        super().__init__()
        # self.qa = dspy.Predict(QuestionAnswer)
        self.qa = dspy.ChainOfThought(QuestionAnswer)

    def forward(self, question, **kwargs):
        return self.qa(question=question)


lm = dspy.LM("ollama_chat/llama3.2", api_base="http://localhost:11434", api_key="")
dspy.configure(lm=lm)

model = Model()

metric = SemanticF1(decompositional=True)

local_filename = "/Users/yoongeemin/Developer/Projects/app/packages/service-ai-py/src/service_ai/ragqa_arena_tech_examples.jsonl"
# with requests.get("https://huggingface.co/dspy/cache/resolve/main/ragqa_arena_tech_examples.jsonl", stream=True) as r:
#     with open(local_filename, 'wb') as f:
#         for chunk in r.iter_content(chunk_size=8192):
#             f.write(chunk)


with open(local_filename) as f:
    data = [ujson.loads(line) for line in f]
    data = [dspy.Example(**d).with_inputs('question') for d in data]
    random.Random(0).shuffle(data)
    trainset, devset, testset = data[:200], data[200:500], data[500:1000]

    # example = trainset[2]
    # pred = model(**example.inputs())
    # score = metric(example, pred)

    evaluate = dspy.Evaluate(devset=devset,
                             metric=metric,
                             num_threads=24,
                             display_progress=True,
                             display_table=2)
    evaluate(model)
