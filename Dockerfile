FROM python:3.7-slim-stretch

RUN apt-get update && apt-get install -y git python3-dev gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --upgrade -r requirements.txt
RUN pip install --upgrade --user prompt_toolkit==2.0.10

RUN pip install -q git+https://github.com/fastai/fastprogress --upgrade
RUN install -q git+https://github.com/fastai/fastcore --upgrade
RUN install -q git+https://github.com/fastai/fastai2 --upgrade

COPY app app/

RUN python app/server.py

EXPOSE 5000

CMD ["python", "app/server.py", "serve"]
