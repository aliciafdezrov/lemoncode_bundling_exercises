# PRÁCTICA MÓDULO 3 WEBPACK

En este repositorio se encuentran los ejercicios del módulo de bundling del máster de Lemoncode. El ejercicio está dividido en dos carpetas y ambas carpetas contienen los requisitos del ejercicio:

    - Tenga el bundling montado con webpack.
    - Muestre un logo (si queréis el de lemoncode).
    - Este montada con typescript.
    - Tenga el texto de hola mundo estilado con SASS.
    - Muestra un hola mundo desarrollado con React.
    - Montar la versión de producción.                                                                                                                                         
                                                                                                                                              

Dichas carpetas son:

1. **parcel_version**. Versión del enunciado replicada con parcel (corresponde al apartado de los bonus points sobre Parcel). 

2. **webpack_version**. Ejercicio realizado con webpack. También incluye exclusivamente los siguientes puntos:

    - Tener variables de entorno para desarrollo o producción.
    - Tener una medida de cuanto mide cada librería.
    
## PARCEL VERSION

Para ejecutar la versión de parcel debemos, primero, ejecutar el siguiente comando:

```
cd parcel_version && npm install
```

Según queramos ejecutar las versiones de pre-producción o de producción lanzaremos uno de los siguientes comandos: 

* **Pre-producción**: 

```
npm run build
```

Una vez ejecutado el comando el servidor de desarrollo se encontrará disponible en: http://localhost:1234/

* **Producción**:

Requiere tener algún servidor de aplicaciones para poder probarlo. En esta guía se usa *lite-server* pero podría ser cualquiera.

Primero, se lanza la build de producción:  

```
npm run build:prod
```

Seguidamente se ejecuta en *lite-server* el resultado de dicha build:

```
cd dist/ && lite-server
```

## WEBPACK VERSION

Para ejecutar la versión de webpack debemos, primero, ejecutar el siguiente comando:

```
cd webpack_version && npm install
```

Según queramos ejecutar las versiones de pre-producción o de producción lanzaremos uno de los siguientes comandos: 

* **Pre-producción**

```
npm start
```

Una vez ejecutado el comando el servidor de desarrollo se encontrará disponible en: http://localhost:8080/

* **Producción**


Requiere tener algún servidor de aplicaciones para poder probarlo. En esta guía se usa *lite-server* pero podría ser cualquiera.

Primero, se lanza la build de producción:  

```
npm run build:prod
```

Seguidamente se ejecuta en *lite-server* el resultado de dicha build:

```
cd dist/ && lite-server
```

* **Bundler Analyzer Plugin**

Para poder ejercutar la fase de rendimiento sobre la versión de producción de la aplicación lanzaremos la siguiente fase de npm: 

```
npm run build:perf
```

Se abrirá un servidor en la url: http://127.0.0.1:8888/ dando información sobre cuánto ocupa cada librería.