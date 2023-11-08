# FulltimeForce_Test

FulltimeForce test based on ReactJs and NestJS

FulltimeForce es un proyecto de ejemplo que muestra cómo utilizar diferentes tecnologías y herramientas para construir una aplicación web interactiva. En este proyecto, utilizamos tecnologías como Node.js, React, Axios, Tailwind CSS, React Icons y más para crear una aplicación que puede interactuar con una API externa de GitHub para mostrar una lista de commits. A lo largo de este archivo README, exploraremos los detalles de la configuración, instalación y funcionamiento del mismo.


## Tabla de Contenidos

- [FulltimeForce\_Test](#fulltimeforce_test)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Contact](#contact)

## Requisitos

Antes de comenzar con la instalación y ejecución de Fullproyect, asegúrate de tener las siguientes herramientas y tecnologías instaladas en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/): FulltimeForce utiliza Node.js como entorno de ejecución para el servidor y las herramientas de desarrollo. Asegúrate de tener Node.js instalado en tu sistema.

- [npm](https://www.npmjs.com/) (Administrador de paquetes de Node.js): npm se utiliza para instalar y administrar las dependencias del proyecto.

- [Git](https://git-scm.com/): Git es necesario para clonar el repositorio y colaborar en el desarrollo del proyecto.

Asegúrate de que estas herramientas estén disponibles antes de continuar con la instalación de FulltimeForce. Puedes verificar si están instaladas ejecutando los siguientes comandos en tu terminal:

```sh
node -v
npm -v
git --version
```

## Instalación

Siga estos pasos para instalar y configurar Fullproyect en su entorno de desarrollo:

 - Clonar el repositorio desde GitHub:

   ```bash
   git clone https://github.com/tu-usuario/fullproyect.git

  Reemplace tu-usuario con su nombre de usuario de GitHub.

 - Navegue al directorio del proyecto:

   
    cd fullproyect
    Instale las dependencias del proyecto utilizando npm:

    
    npm install
    Configure las variables de entorno:

  - Duplique el archivo .env.example y renómbrelo a .env.
    Abra el archivo .env y configure las variables de entorno según sus necesidades.
    Ejecute la aplicación en su entorno de desarrollo:

 
    npm start
    La aplicación estará disponible en http://localhost:3000 por defecto.

  - ¡Listo! Ahora puede acceder a Fullproyect en su navegador y comenzar a trabajar en el proyecto.

## Uso

Para utilizar este proyecto, sigue estos pasos:
```
 - Clona el repositorio en tu máquina local:
  git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git

 - Accede al directorio del proyecto:
  cd TU_REPOSITORIO

 - Instala las dependencias necesarias:
  npm install

 - Inicia la aplicación:
  npm start
```
Abre tu navegador web y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

Ahora puedes explorar y utilizar la aplicación de acuerdo a tus necesidades.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
project/
│
├── front/ (Frontend en ReactJS)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CardComponent.js
│   │   │   ├── CommitComponent.js
│   │   │   ├── CommitsListComponent.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── ...
│   ├── package.json
│   ├── ...
│
├── back/ (Backend en NestJS)
│   ├── dist/
│   ├── src/
│   │   ├── github/
│   │   │   ├── github.controller.ts
│   │   │   ├── github.service.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── ...
│   ├── node_modules/
│   ├── package.json
│   ├── tsconfig.json
│   ├── ...
│
├── README.md
├── LICENSE
├── package.json
├── ...
```

## Contacto

 [Bernardo Zelaya Github](#github.com/zelayab)

# FulltimeForce_Test
 ENGLISH VERSION

 FulltimeForce is a sample project that demonstrates how to use different technologies and tools to build an interactive web application. In this project, we use technologies like Node.js, React, Axios, Tailwind CSS, React Icons, and more to create an application that can interact with an external GitHub API to display a list of commits. Throughout this README file, we will explore the details of setup, installation, and how to run the project.



 Before getting started with the installation and running of Fullproyect, make sure you have the following tools and technologies installed in your development environment:

- [Node.js](https://nodejs.org/): FulltimeForce uses Node.js as the runtime environment for the server and development tools. Make sure you have Node.js installed on your system.

- [npm](https://www.npmjs.com/) (Node.js Package Manager): npm is used to install and manage project dependencies.

- [Git](https://git-scm.com/): Git is required for cloning the repository and collaborating on the project's development.


Asegúrate de que estas herramientas estén disponibles antes de continuar con la instalación de FulltimeForce. Puedes verificar si están instaladas ejecutando los siguientes comandos en tu terminal:

```sh
node -v
npm -v
git --version
```

## Installation

Follow these steps to install and set up Fullproyect in your development environment:

  - Clone the repository from GitHub:

```bash
git clone https://github.com/tu-usuario/fullproyect.git
```
  Replace your-username with your GitHub username.

 - Navigate to the project directory:

    cd fullproyect

    Install the project's dependencies using npm:
    npm install

    Configure environment variables
  - Duplicate the .env.example file and rename it to .env.
    Open the .env file and configure the environment variables according to your needs.

    Run the application in your development environment:
    npm start
    The application will be available at http://localhost:3000 by default.

  - You're all set! You can now access Fullproyect in your browser and start working on the project.

## Usage

To use this project, follow these steps:


```
 - Clone the repository to your local machine:
  git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git

 - Navigate to the project directory:
  cd TU_REPOSITORIO

 - Install the necessary dependencies:
  npm install

 - Start the application:
  npm start
```

Open your web browser and go to http://localhost:3000 to see the application in action.

Now you can explore and use the application according to your needs.

## Project Structure

The project structure is as follows:

```
project/
│
├── front/ (Frontend in ReactJS)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CardComponent.js
│   │   │   ├── CommitComponent.js
│   │   │   ├── CommitsListComponent.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── ...
│   ├── package.json
│   ├── ...
├── back/ (Backend in NestJS)
│   ├── dist/
│   ├── src/
│   │   ├── github/
│   │   │   ├── github.controller.ts
│   │   │   ├── github.service.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── ...
│   ├── node_modules/
│   ├── package.json
│   ├── tsconfig.json
│   ├── ...
│
├── README.md
├── LICENSE
├── package.json
├── 
```


## Contact

 [Bernardo Zelaya Github](#github.com/zelayab)
