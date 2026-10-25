# CAA Writing B1

Sitio web estático con 8 unidades de práctica de *writing*: las 7 unidades de su libro de writing de este nivel más una de ensayos argumentativos. Son 3 unidades de párrafos (≈30 min) y 5 de ensayos de 5 párrafos (≈45 min). Todos los textos y ejercicios son originales.

| Unidad | Tema | Producto final | Tiempo |
|---|---|---|---|
| 1 | Paragraphs | Párrafo desarrollado (smartphones, amistad, entrevistas de trabajo o una buena comida) | ≈30 min |
| 2 | Features of Good Writing | Párrafo de consejos para un público específico | ≈30 min |
| 3 | Types of Paragraphs | Párrafo del tipo que elija: causa-efecto, comparación, clasificación o problema-solución | ≈30 min |
| 4 | Classification Essays | Ensayo de clasificación de 5 párrafos | ≈45 min |
| 5 | Cause-Effect Essays | Ensayo de causa-efecto de 5 párrafos | ≈45 min |
| 6 | Comparison Essays | Ensayo de comparación de 5 párrafos (método por bloques o punto por punto) | ≈45 min |
| 7 | Problem-Solution Essays | Ensayo de problema-solución de 5 párrafos | ≈45 min |
| 8 | Argument Essays | Ensayo argumentativo de 5 párrafos con contraargumento y refutación | ≈45 min |

Cada unidad tiene 5 pasos: **Get ready** (modelo) → **Focus 1** → **Focus 2** (gramática y puntuación, autocalificables)
→ **Plan** (organizador) → **Write & check** (el alumno arma su borrador con su plan, lo corrige y obtiene una calificación automática).

## Cómo califica el texto final
- **Tarea y organización (70 %)**: revisiones automáticas de cada unidad: título bien escrito, oración temática,
  número de oraciones, fragmentos, mayúsculas, punto final, estructuras de la unidad (número de párrafos, tesis clara al final de la introducción, párrafos de desarrollo con al menos 3 oraciones,
  conclusión, *comma splices*, concordancia, conectores de causa-efecto o de comparación, cláusulas adverbiales…) y vocabulario de la unidad. Cada revisión da un consejo concreto.
- **Gramática y ortografía (30 %)**: el texto se revisa con LanguageTool (gratis, sin cuenta). Solo se envía el texto, no el nombre.
  Si no hay internet, la calificación usa solo la parte de tarea y organización.
- La calificación es una guía: usted puede poner otra.

## Subir a GitHub Pages (sitio web de GitHub)
1. Cree un repositorio nuevo, público (por ejemplo `caa-writing-b1`).
2. *Add file → Upload files* y arrastre **todo el contenido** de esta carpeta (son menos de 100 archivos, cabe en una sola subida).
   El archivo `.nojekyll` está oculto en Mac: ábralo con Cmd+Shift+. en Finder para verlo y subirlo también.
3. *Settings → Pages → Branch: main / (root) → Save*. En un par de minutos el sitio queda en
   `https://SU-USUARIO.github.io/caa-writing-b1/`.

## Recibir los textos de los alumnos (opcional)
Puede usar el mismo Google Apps Script de sus otros sitios CAA (`tools/writing-collector.gs`; instrucciones dentro del archivo).
Pegue la URL que termina en `/exec` en `assets/config.js` → `writingEndpoint`. Cada texto llega como una fila con nombre,
grupo, unidad, calificación automática y el texto. Sin esa URL, los alumnos descargan o imprimen (PDF) su texto.

## Archivos
- `index.html` — página de inicio con las 8 unidades y el progreso de cada alumno.
- `unit.html?u=1` … `?u=8` — cada unidad (una sola página que lee el contenido de `assets/units.js`).
- `assets/units.js` — todo el contenido: modelos, explicaciones, ejercicios, plan, rúbrica y checklist.
- `assets/engine.js` — el motor (calificación de actividades y del texto). `assets/style.css` — diseño.
- `assets/config.js` — los ajustes que usted puede cambiar.
