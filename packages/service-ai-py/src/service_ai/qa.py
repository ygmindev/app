import dspy


class QuestionAnswer(dspy.Signature):
    """Generates accurate answer based on question"""
    question: str = dspy.InputField()
    answer: str = dspy.OutputField()


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
