FROM python:3.6.9-alpine
WORKDIR /backend
RUN apk --update --upgrade add --no-cache gcc musl-dev jpeg-dev zlib-dev libffi-dev cairo-dev pango-dev gdk-pixbuf-dev
RUN python -m pip install --upgrade pip
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD [ "python", "app.py" ]