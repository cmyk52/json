https://oscarleuro.com/javascript/guia-de-ajax-en-espanol/
https://www.w3bai.com/es/js/js_htmldom_eventlistener.html#gsc.tab=0

reference error: https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null

Cargar la hoja como defer o async para que los addEventListener, no tengan problemas de carga:

<script defer src="js.js"></script>
<script async src="js.js"></script>

La diferencia principal entre defer y async está en cómo afectan la ejecución de los scripts en relación con el análisis y carga de la página.

defer:

El script se descarga en paralelo con el análisis de la página.
Se ejecutará después de que el análisis del HTML haya finalizado, pero antes de que se complete la carga de la página.
Si hay varios scripts con el atributo defer, se ejecutarán en el orden en que aparecen en el documento.
Útil cuando el script depende del contenido del documento y necesita ejecutarse en un orden específico.

async:

El script se descarga en paralelo con el análisis de la página.
Se ejecutará tan pronto como esté disponible, sin esperar a que se complete el análisis del HTML.
No garantiza el orden de ejecución si hay varios scripts con el atributo async.
Útil cuando el script no depende del contenido del documento y puede ejecutarse de forma independiente.

En resumen, defer se asegura de que los scripts se ejecuten en el orden en que aparecen en el documento después de que se haya analizado el HTML, mientras que async permite que los scripts se ejecuten tan pronto como estén disponibles, sin importar el orden en el que aparezcan. La elección entre defer y async depende de los requisitos específicos de tu script y de si necesita acceder al contenido del documento antes de ejecutarse.