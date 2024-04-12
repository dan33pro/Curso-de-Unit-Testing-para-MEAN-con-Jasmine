# Curso de Unit Testing para MEAN con Jasmine
---
## Bienvenida e Introducción
---
---
### ¿Qué son las pruebas unitarias?
Las pruebas unitarias o Unit testing forman parte de los diferentes procedimientos que se
pueden llevar a cabo dentro de la metodología ágil; código que sirve para probar otro código.
Pequeñas pruebas creados específicamente para cubrir todos los requisitos del código y verificar sus resultados.

#### ¿Para qué sirven las pruebas unitarias?
- **Red de seguridad:** Prevenir cambios inesperados en nuestras aplicaciones por miembros de nuestro equipo o, incluso, nosotros mismos.
- **Calidad del código:** Mejora continua de nuestro código. Podemos revisar y mejorar código viejo o contemplar casos de uso que no tuvimos en cuenta al comenzar el desarrollo.
- **Reducir costos:** Prevención y detección de errores a edad temprana, antes de que puedan salirse de control.

#### Recursos
- [Slides aquí](https://static.platzi.com/media/public/uploads/slides-del-curso-de-unit-testing-con-jasmine_ba5e19dc-ae39-44e0-b4ab-0309fd3c6124.pdf)
- [Repositorio Final](https://github.com/xthecapx/mean)

### ¿Por qué hacer pruebas unitarias?
---

La productividad, el valor generado, el presupuesto, el tiempo, son consideradas las variables más importantes en cualquier
tipo de proyecto. Si le preguntas al dueño de la empresa el presupuesto va a ser lo principal. Si hablas con el dueño del
producto, la productividad y el valor agregado serán su enfoque. Si hablas con el cliente probablemente el tiempo es lo más
importante. Es por ello que vale la pena preguntarnos, ¿deberíamos reservar un espacio para la creación de pruebas unitarias?

Crear pruebas unitarias implica la creación de una aplicación en paralelo que permita ejecutar y probar nuestro código base.
Es decir, dependiendo de las habilidades del programador, el tiempo dedicado a su creación puede llegar a ser igual o
en algunos casos mayor al tiempo empleado para escribir la solución.

Veamos esto con un ejemplo. Imagina que una empresa tiene la tarea de crear un formulario para registrar asistentes a
una conferencia. Como el presupuesto es ajustado, el grupo de desarrollo decide crear la solución sin un sistema de
pruebas. La primera fase del proyecto fue un “éxito”. El equipo de pruebas encuentra un problema con las validaciones
del formulario y un error en consola debido a un tipo de dato. El equipo de desarrollo resuelve el problema y finalmente
se puede entregar el producto.

De la situación anterior podemos analizar lo siguiente:
1. Si bien la primera entrega del producto fue exitosa, la falta de un sistema de alertas durante el
   tiempo de desarrollo, hizo que errores relacionados con tipos de datos solo fueran detectados durante las pruebas de calidad.
3. La aplicación requirió de un nuevo ciclo de desarrollo para arreglar el problema.
4. Debido al tamaño de la aplicación realizar cambios serán bastante rápidos.

Ahora bien, supongamos que ese mismo sistema se utiliza para otro cliente pero esta vez se le debe agregar un sistema de
autenticación. Una persona del equipo decide abandonar la empresa. El proceso desarrollo fue un éxito. El tiempo estimado
se incrementó. Nuevamente no se creó un sistema de pruebas. Se requirieron dos rondas de pruebas adicionales y de desarrollo
para poder realizar la entrega del producto.

Analicemos la situación anterior:
1. El proyecto se atraso debido a la salida y al proceso de aprendizaje del nuevo desarrollador.
2. Nuevamente no se realizó un sistema de pruebas en la aplicación.
3. Se realizaron dos rondas de pruebas y de desarrollo adicionales a lo planeado.

¿Qué puedes concluir de estas situaciones?, ¿Cómo podrías mejorar el proceso de desarrollo de esta aplicación? Como
ya te imaginarás, una de las cosas que se pudo mejorar sería la implementación de un sistema de pruebas. Sin embargo,
¿Cómo las pruebas unitarias te pueden ayudar en tus desarrollos?

#### Las pruebas unitarias
Comencemos con la definición. Las pruebas unitarias no son más que un programa que permite probar nuestro código base. Es decir,
las pruebas unitarias implica la creación de pequeños extractos de código que ejecutarán todas las líneas dentro de una función,
de tal forma que se pueda verificar su comportamiento.

El tiempo dedicado para la creación de las pruebas unitarias debe ser incluido durante la fase de desarrollo, de tal forma
que se pueda crear la solución y las pruebas relacionadas con el problema en un mismo momento.

#### ¿Para qué sirven las pruebas unitarias?
Las pruebas unitarias sirven para:
1. **Red de seguridad:** Cada vez que creas una prueba unitaria, estas analizado el código en partes pequeñas, por lo tanto,
   es posible crear un sistema de alertas ante futuros cambios en el código.
2. **Documentación:** Debido a que tenemos una aplicación que va a ejecutar las líneas de código de nuestro programa, es el
   momento perfecto para documentar y verificar lo que esperamos que pase. Es decir, vamos a explicar nuestro código, mostrando cómo se deben utilizar.
3. **Calidad de código:** Durante el proceso de creación de pruebas unitarias además de detectar errores, es el momento
   ideal para mejorar la solución o aplicar mejores patrones de diseño a nuestro código.
4. **Reducción de costos:** Todos los puntos anteriores van a ayudar con la reducción de costos. Contar con una documentación
   adecuada nos va ayudar con futuras modificaciones al código o la incorporación de nuevos desarrolladores al proyecto. La red
   de seguridad y la calidad en el código va a permitir la detección de errores temprana, por lo tanto, va a prevenir que te atrases en las entregas.

## Creando un framework de pruebas básico
---
---
### Mi primera prueba unitaria en JavaScript
---
#### Características de las pruebas unitarias:
- Aunque los resultados deben ser específicos de cada test unitario desarrollado, los resultados se pueden automatizar, de forma que podemos hacer las pruebas de forma individual o en grupos.
- El proceso consta de pequeños test sobre parte del código, pero al final, se debe comprobar su totalidad.
- En el caso de repetir las pruebas de forma individual o grupal, el resultado debe ser siempre el mismo, dando igual el orden en que se realicen los test, los tests se almacenan para poder realizar estas repeticiones o poder usarlos en otras ocasiones.
- Es un código aislado que se ha creado con la misión de comprobar otro código muy concreto, no interfiere en el trabajo de otros desarrolladores.
- A pesar de lo que muchos desarrolladores opinen, el código de los tests unitarios no debe llevar más de 5 minutos en ser creado, están diseñados para hacer que el trabajo sea más rápido.

#### Archivos de la clase
- [prueba.js](https://static.platzi.com/media/tmp/class-files/github/unit-testing/unit-testing-2.primera-prueba-unitaria/prueba.js)
- [README.md](https://static.platzi.com/media/tmp/class-files/github/unit-testing/unit-testing-2.primera-prueba-unitaria/README.md)
- [index.html](https://static.platzi.com/media/tmp/class-files/github/unit-testing/unit-testing-2.primera-prueba-unitaria/index.html)

### Las funciones expect() y it()
---
Vamos a seguir trabajando con los archivos anteriores pero vamos a refactorizar su definición:

Los errores en tiempo de ejecución también tienen como resultado un nuevo objeto `Error` que es creado y lanzado.
Normalmente los objetos de Error se crean con la intención de lanzarlos utilizando _throw_. Es posible manejar el error mediante _try catch_:
```js
try {
    throw new Error("Algo salió mal!");
} catch (e) {
    alert("Bien hecho");
}
```

La función `it()` define una prueba de _jasmine_. Se llama así porque su nombre hace que las pruebas de lectura sean casi como leer en inglés.

El segundo argumento de la función `it()` es en sí mismo una función, que cuando se ejecute probablemente ejecutará un número de funciones `_expect()`.

Las funciones `expect()` se utilizan para probar realmente las cosas que “espera” que sean ciertas.

#### Ejemplo de la clase
```js
const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar("Platzi"));

function expect(actual) {
    return {
        toBe(expect) {
            if (actual !== expect) {
                throw new Error("Prueba no existosa");
            }
        },
    };
}

function it(title, callback) {
    try {
        callback();
        console.log(`Prueba: ${title} fue exitosa`);
    } catch (error) {
        console.error(`Prueba: ${title} no fue exitosa`);
    }
}

it("La función saluda", () => {
    expect(saludar("Platzi")).toBe("Hola Platzi");
});
```

#### Archivos de la clase
- [prueba.js](https://static.platzi.com/media/tmp/class-files/github/unit-testing/unit-testing-3.funciones-expect-it/prueba.js)
- [README.md](https://static.platzi.com/media/tmp/class-files/github/unit-testing/unit-testing-3.funciones-expect-it/README.md)
- [index.html](https://static.platzi.com/media/tmp/class-files/github/unit-testing/unit-testing-3.funciones-expect-it/index.html)

### Organizando el código para correr en la web
---

1. Ahora bien vamos a refactorizar los archivos para separar las resposabilidades, para esto creamos un archivo `app.js` con:
```js
const saludar = (nombre) => `Hola ${nombre}`;
```

2. Luego creamos un archivo `app.spec.js` con:
```js
console.log(saludar("Platzi"));

it("La función saluda", () => {
    expect(saludar("Platzi")).toBe("Hola Platzi");
});
```

3. Y creamos otro archivo `framework.js` con:
```js
function expect(actual) {
    return {
        toBe(expect) {
            if (actual !== expect) {
                throw new Error("Prueba no existosa");
            }
        },
    };
}

function it(title, callback) {
    try {
        callback();
        console.log(`✓ ${title}`);
    } catch (error) {
        console.error(`× ${title}`);
    }
}
```

5. Por ultimo importamos los `scripts` en el `index.html`:
```html
...
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera prueba unitaria</title>
    <script src="./framework.js"></script>
    <script src="./app.js"></script>
    <script src="./app.spec.js"></script>
</head>
...
```

> [!NOTE]
> Ahora vamos a refactorizar el código para que no solo corra en el navegador.

### Organizar el código para correr utilizando node.js
___
Como la forma en que funciona **JavaScript** con **node.js** es un poco diferente a como funciona en un navegador, tenemos que refactorizar nuestro código para que funcione con modulos, para esto vamos a hacer los siguientes cambios:

1. En el `app.js` exportamos `saludar()`:
```js
const saludar = (nombre) => `Hola ${nombre}`;

module.exports = saludar;
```

2. En nuestro `framework` exportamos un objeto con las funciones `expect()` e `it()`:
```js
module.exports = {
    expect,
    it,
};
```

3. Y en nuestro `app.spec.js` importamos las funciones necesarias:
```js
const { it, expect} = require('./framework');
const saludar = require('./app');
```

> [!NOTE]
> Para correr las pruebas con `node.js` usamos `node app.spec.js`

## Análisis estático de código
___
___
### Herramientas de análisis estático de código
___
**Linters:** Herramientas de alertas. Nos ayudan a seguir las reglas o convenciones de nuestros equipos sin tener que memorizar todo el libro de reglas; solo debemos programar y asegurarnos de que estas herramientas revisen nuestro código.

Por ejemplo: **ESLint**, **JSHint**, **CSSComb** o **scsslint**.

Corrección automática: Herramientas que nos ayudan a revisar y arreglar nuestro código sin importar si usamos un editor de código u otro; funcionan para todos los casos y gustos de la comunidad. Por ejemplo: **Prettier**.

**Tipado:** JavaScript es lenguaje de tipado dinámico, podemos cambiar el tipo de variables cada vez que queramos o necesitemos. Pero, podemos usar diferentes herramientas para implementar el tipado fuerte, es decir, que podamos usar variables con tipos diferentes al que definimos inicialmente (a menos que hagamos una conversión).

La herramienta de tipado más popular en JavaScript es **TypeScript** pero tambien existen algunas alternativas como **Flow** y **React** **PropTypes**.

### ESLint: Agregando alertas a nuestro código con ECMA Script
___
ESLint es una herramienta que identifica y reporta patrones y errores en código ECMAScript/JavaScript. Es similar a JS-Lint y JSHint con algunas diferencias:

- ESLint usa Espree para analizar JavaScript.
- ESLint usa un AST para evaluar patrones en código.
- ESLint soporta plugins, cada regla es un plugin y puedes agregar más en desarrollo.

> [!NOTE]
> Puedes instalar el plugin en VSCode o instalarlo desde la terminal con: `npm install -g eslint`

> [!IMPORTANT]
> En los proyectos se crea un archivo de configuración `.eslintrc` con la configuración deseada.

#### Lecturas recomendadas
- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [eslint-config-standard/eslintrc.json at master · standard/eslint-config-standard · GitHub](https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json)

### Herramientas de corrección de estilo
___
**Prettier** es un formateador de código opinado. Aplica un estilo coherente al analizar su código y reimprimirlo con sus propias reglas que toman en cuenta la longitud máxima de la línea, envolviendo el código cuando sea necesario.

Puede ejecutarse en su editor al guardar, en un gancho de confirmación previa o en entornos CI para garantizar que su base de código tenga un estilo coherente sin que los desarrolladores tengan que publicar un comentario minucioso sobre una revisión de código.

Ofrece soporte para:

- JavaScript, including ES2017
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML

Por ejemplo tenemos éste codigo de JavaScript mal formateado:
```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

Al pasar Prettier nos lo deja de una manera más legible:
```js
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

> [!NOTE]
> Puedes instalar el plugin en VSCode o instalarlo desde la terminal con: `npm install -g prettier`
>
> Desde **shell** podemos formatear un archivo con: `prettier --write framework.js`

#### Lecturas recomendadas
- [Prettier · Opinionated Code Formatter](https://prettier.io/)


### Herramientas de tipado
___
TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft.

Es un superconjunto de JavaScript, que esencialmente añade tipado estático y objetos basados en clases.

TypeScript extiende la sintaxis de JavaScript, por tanto cualquier código JavaScript existente debería funcionar sin problemas.

Está pensado para grandes proyectos, los cuales a través de un compilador de TypeScript se traducen a código JavaScript original.

#### Lecturas recomendadas
- [TypeScript - JavaScript that scales.](https://www.typescriptlang.org/)

## Trabajando con Jasmine en el frontend
___
___
### Profundización en SpyOn: Comandos más utilizados y cómo ponerlos a prueba
___
#### Jasmine spyOn
La separación de responsabilidades es una de las buenas prácticas que encontramos en un proyecto de software. Separar responsabilidades significa agrupar código de tal manera que cada conjunto se encargue de una tarea específica.

Hablemos ahora de las pruebas unitarias. Cuando probamos un componente, queremos probar las responsabilidades que le estamos delegando al componente y no todo el código ejecutado. Es decir, si el componente A utiliza la función b(), lo que queremos probar es la lógica propia del componente y no el código de la función.

Veamos el siguiente ejemplo:

```js
function GetMonthApi() {
  this.currentMonth = function () {
    return 'May';
  }
  this.nextMonth = function () {
    return 'June'
  }
}
export function MonthCalculator() {
  this.api = new getMonthApi();
  this.getNextMonth = function() {
    return this.api.nextMonth();
  }
  this.getCurrentMonth = function() {
    return this.api.currentMonth();
  }
}
```

La clase MonthCalculator nos permite calcular el valor del mes actual y el siguiente. Cómo puedes ver, la función getMonthApi es utilizada dentro de la clase. Si ejecutas el set de pruebas asociadas a nuestra clase se ejecuta en Mayo el valor del siguiente mes sería Junio, o si las corres en Enero el siguiente mes sería Febrero. ¿Ves el problema?.

Si ejecutamos código que se encuentre fuera del domino de un componente, nos podemos encontrar con resultados inesperados. Es por ello, que jasmine cuenta con un sistema de espías (spyOn), cuyo objetivo principal es interceptar la ejecución de una función y simular su resultado.

#### Veamos un poco de código:
El primer método que vamos a probar es el de obtener el mes actual currentMonth. Si la prueba la creamos en mayo, el código debería ser:
```js
describe('MonthCalculator', () => {
  it('returns the current month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();  
    // Act
    const month = monthCalculator.currentMonth();
    // Assert
    expect(month).toBe('May');
  });
});
```

Este código tiene un problema. La función currentMonth va a retornar un valor que depende del mes actual.

Como ya te podrás imaginar, el uso de espías resulta bastante útil en este caso debido a que podemos controlar el valor del mes retornado.

Es decir:

```js
describe('MonthCalculator', () => {
  it('returns the current month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();
    const spy = spyOn(
                 monthCalculator.api,
                 'currentMonth'
               ).and.returnValue('Cristian Month');
    // Act
    const month = monthCalculator.currentMonth();
    // Assert
    expect(month).toBe('Cristian Month');
    expect(spy).toHaveBeenCalled();
  });
});
```

La instancia del API la tenemos almacenada en la variable this.api de nuestra clase.
Jasmine nos permite interceptar el llamado a nuestro API utilizando la función `spyOn`. Para ello, como primer parámetro debemos pasar el objeto que contiene el método que vamos a interceptar y como segundo parámetro el nombre del mismo.

Una vez creado nuestro espía, para poder controlar el valor retornado debemos concatenar lo siguiente: .and.`returnValue()`.
Finalmente Jasmine nos permite verificar la ejecución de la función por medio del operador `.toHaveBeenCalled()`.

Cómo reto ve al siguiente enlace, has un fork del proyecto y realiza las pruebas relacionadas con el método `nextMonth()`. Recuerda crear un espía para eliminar la dependencia con nuestra API.

#### Finalmente, te dejo un listado de preguntas y respuestas sobre todo lo que puedes hacer con espías:
##### ¿Cómo se crea un espía?
```js
spyOn(obj, 'method') // obj.method es una función
```

##### ¿Cómo verificar que un método fue llamado?
```js
const ref = spyOn(obj, 'method');
expect(ref).toHaveBeenCalled();
// O directamente
expect(obj.method).toHaveBeenCalled()
```

##### ¿Cómo verificar que un método fue llamado con un parámetro específico?
```js
const ref = spyOn(obj, 'method');
expect(ref).toHaveBeenCalledWith('foo', 'bar');
// O directamente
expect(obj.method).toHaveBeenCalledWith('foo', 'bar')
```

##### ¿Cómo puedo verificar el número exacto de ejecuciones de un método?
```js
expect(obj.method.callCount).toBe(2);
```

##### ¿Cómo espiar en un método sin modificar su comportamiento?
```js
spyOn(obj, 'method').andCallThrough();
```

##### ¿Cómo puedo cambiar el valor retornado por un método?
```js
spyOn(obj, 'method').andReturn('value');
```

##### ¿Cómo puedo sobreescribir un método?
```js
spyOn(obj, 'method').andCallFake(() => 'this is a function');
```