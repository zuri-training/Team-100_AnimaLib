# Animation Library <img src="https://res.cloudinary.com/dc29czhf9/image/upload/v1659106833/animo_logo_zecrf3.png" width="200" height="100">

This project provides an easy to use guide to developers, precisely beginners, on how to add animations to the several elements on their webpage(s). In essence, we try to avoid the hassle of a developer trying to think critically on how they can create or add animations to their webpage.

## Acknowledgements

- [Zuri x I4G](#)
- [proj-anima-lib Team 100](#)

## Tech Stack

**Design:** Figma <img src="https://res.cloudinary.com/dc29czhf9/image/upload/v1659109673/Figma-logo_pw2gqg.svg" width="20" height="20">

**Client:** HTML, CSS, JavaScript and Bootstrap.

**Server:** Python, Django (web framework).

**Database:** MySQL.

**Version Control:** Github

## Optimization

we converted both files (css and js) of the library to a zip file. The essence of this is to compress both files to a small size, before they are being saved to the client local computer.

## Installation

To install the project to your local computer or server.
clone into a directory in your computer using:
```bash
git clone https://github.com/zuri-training/anima_lib_team-100.git
```
change directory to the project folder created after cloning.
for window users use:
```bash
cd <directoryname>
```
creating a virtual environment (this is optional but advisable)
for window users use: if created successfully, activate the virtual environment.

```bash
virtualenv <virtualenvironmentname>
```
install the required packages, use:
```bash
pip install -r requirements.txt

or

pip3 install -r requirements.txt
```
run migrations to prepare the models or table to be added to the database, use:
```bash
python manage.py makemigrations
```
migrate your tables to the database, using:
```bash
python manage.py migrate
```

finally, you can run your server using:
```bash
python manage.py runserver
```
Sadly, your the server may fail to locate the static files, this is because we've set debug mode to FALSE;
Hence, to render your page nicely, allowing your server locate the Static files; use:
```bash

python manage.py runserver --insecure.
or 
set DEBUG=TRUE
```

## Usage/Examples - How to use library to add nice animation to your web page.

when you are referencing the code on our server. That is, you want to embed a link that points to the css and js on our server.

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>page title</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link rel="stylesheet" href="code_link_to_server" />
  </head>
  <body>
    <tagname class="animation"></tagname>

    <script src="code_link_to_server"></script>
  </body>
</html>
```

when you have downloaded the animation library on your computer

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>page title</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="path_to_style.css" />
  </head>
  <body>
    <tagname class="animation"></tagname>

    <script src="path_to_script.js"></script>
  </body>
</html>
```

## Features

- Interactive documentation showing various animation samples.
- User interaction via comments
- library download as zip file.

## Contributors

```bash
David Ikechi - Dayveed - daakwuru@gmail.com (BackEnd)
Caleb - Octa - (Designer)
Tola - Tolac - (BackEnd)
Add other team members
```

## License

[Zuri x I4G](#)

Project idea was inspired by [Zuri x I4G](#)
