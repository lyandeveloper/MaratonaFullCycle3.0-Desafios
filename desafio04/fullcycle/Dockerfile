FROM python:3

RUN useradd -ms /bin/bash fullcycle

USER fullcycle

ENV PYTHONUNBUFFERED 1

WORKDIR /home/fullcycle/app

ENV PATH $PATH:/home/fullcycle/.local/bin

COPY requirements.txt /home/fullcycle/app

RUN pip install -r requirements.txt

COPY . /home/fullcycle/app 

CMD ["python", "manage.py", "runserver","0.0.0.0:8000"]