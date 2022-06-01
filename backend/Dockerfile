FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /backend/