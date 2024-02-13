from transformers import pipeline
model_checkpoint = "huggingface-course/bert-finetuned-squad"
question_answerer = pipeline("question-answering", model=model_checkpoint)

def answ(q):
    with open('data.txt', 'r') as file: 
     text = file.read()
    context = text
    question = q
    result=question_answerer(question=question, context=context)
    return  result['score'],result['answer']
