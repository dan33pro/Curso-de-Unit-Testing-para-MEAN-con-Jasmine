# Curso-de-Unit-Testing-para-MEAN-con-Jasmine
## Bienvenida e Introducción
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

### Mi primera prueba unitaria en JavaScript
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
