# Guia de uso para publicar posts

## Regla para incluir imagenes

Las imagenes deben poder adaptarse al ancho disponible de la ventana. No se debe fijar un ancho mayor que el contenedor del articulo ni agregar dimensiones obligatorias en pixeles dentro del post.

Como regla practica:

- La imagen debe conservar su proporcion original.
- El ancho visible nunca debe superar el ancho del contenido ni el de la ventana.
- Para imagenes dentro del contenido, se recomienda un ancho maximo de 720 px en el archivo original.
- En el post se debe usar `width: 100%` y `max-width: 100%` cuando se agreguen estilos HTML.
- No se deben deformar las imagenes cambiando por separado su ancho y alto.

## Compartir posts

La barra para compartir el post aparece al final de todos los artículos e
incluye WhatsApp, LinkedIn, Facebook, X, Telegram, TikTok e Instagram. Las
imágenes no incluyen botones para descargar, copiar enlaces o compartirlas por
separado.

## Dimensiones recomendadas

| Orientacion | Proporcion | Dimension ideal | Uso sugerido |
| --- | --- | --- | --- |
| Cuadrada | 1:1 | 600 x 600 px | Convocatorias, portadas y piezas graficas |
| Retrato | 3:4 | 480 x 640 px | Afiches verticales, fotografias de personas y testimonios |
| Paisaje | 3:2 | 720 x 480 px | Fotografias de actividades, territorios y encabezados |

Tambien se aceptan otras proporciones, siempre que la imagen no supere aproximadamente 720 px en su lado mas largo y conserve buena legibilidad.

## Formatos y peso

- **JPEG:** recomendado para fotografias. Usar calidad aproximada de 75-85%.
- **WebP:** recomendado cuando sea posible por su menor peso.
- **PNG:** usarlo para logotipos, ilustraciones o imagenes que necesiten transparencia; evitarlo para fotografias.
- Peso recomendado: hasta 200 KB por imagen. Para piezas con mucho texto, priorizar la legibilidad sin superar aproximadamente 300 KB.
- Usar nombres descriptivos en minusculas, sin espacios ni tildes, por ejemplo: `conv-abierta-01.jpeg`.

## Ejemplo para una imagen dentro del post

```html
<figure class="article-inline-image">
  <img
    src="/images/nombre-de-la-imagen.jpeg"
    alt="Descripcion clara de lo que muestra la imagen"
  />
  <figcaption>Breve leyenda opcional de la imagen.</figcaption>
</figure>
```

La imagen debe guardarse previamente en `public/images/`. El texto alternativo es obligatorio para describir la imagen a personas que usan lectores de pantalla.

## Videos dentro de los posts

Los posts pueden incluir videos directamente en el cuerpo Markdown usando HTML. El diseño del articulo adapta el video al ancho disponible, tanto en computador como en movil.

### Video local

Guardar el archivo en `public/videos/` con un nombre descriptivo, preferiblemente en formato MP4 optimizado:

```html
<figure class="article-video">
  <video controls preload="metadata" poster="/images/portada-video.jpg">
    <source src="/videos/nombre-del-video.mp4" type="video/mp4" />
    Tu navegador no admite la reproduccion de video.
  </video>
  <figcaption>Descripcion breve del video.</figcaption>
</figure>
```

### Video externo

Para YouTube, Vimeo u otro proveedor compatible, usar un `iframe` dentro del mismo contenedor y añadir un titulo accesible:

```html
<figure class="article-video">
  <iframe
    src="https://www.youtube.com/embed/ID_DEL_VIDEO"
    title="Titulo descriptivo del video"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <figcaption>Descripcion breve del video.</figcaption>
</figure>
```

Recomendaciones editoriales:

- Usar `controls` en videos locales y no iniciar reproducciones automaticamente.
- Mantener los videos con una proporcion cercana a 16:9 y un peso razonable.
- Incluir `poster` en videos locales cuando exista una imagen representativa.
- Escribir siempre un `title` descriptivo para los `iframe`.
- No insertar videos cuyo contenido no tenga relacion directa con el articulo.
- Comprobar que el video se puede reproducir en movil y que el proveedor permite su insercion.

## Biografias de autores y correspondencia por articulo

Para evitar repetir la misma descripcion de cada autor en cada entrada del blog, se recomienda mantener una biografia unica por persona u organizacion y vincularla desde cada articulo.

### Estructura recomendada

Crear una carpeta de autores dentro del contenido del blog, por ejemplo:

```text
src/content/
  autores/
    hector-galeano-david.md
    corporacion-cultura-y-desarrollo.md
  blog/
    post-1.md
    post-2.md
```

Cada archivo de autor debe tener su propia bio en Markdown, con datos basicos del autor y una descripcion editorial clara.

Ejemplo:

```md
---
name: "Héctor Galeano David"
slug: "hector-galeano-david"
image: "/images/hector-galeano.jpg"
---

Héctor Galeano David es internacionalista, docente universitario e investigador con 25 años de experiencia en Relaciones Internacionales. Analista internacional para medios nacionales e internacionales. Miembro de la Corporación Cultura y Desarrollo.
```

### Correspondencia en el frontmatter del post

En cada articulo, el frontmatter no debe duplicar la biografia completa. Solo debe apuntar al autor correspondiente.

Ejemplo recomendado:

```yaml
---
title: "El patrimonio no se conserva: se vive"
description: "El patrimonio cultural debe ser motor vivo de desarrollo social y económico para los protagonistas de su gestión."
pubDate: "2026-09-08"
author: "Héctor Galeano David"
authorSlug: "hector-galeano-david"
authorImage: "/images/hector-galeano.jpg"
category:
  - "Cultura"
  - "Política Cultural"
tags: ["Colombia", "Patrimonio"]
---
```

La clave es que `authorSlug` o `authorId` coincida exactamente con el nombre del archivo del autor, sin espacios ni tildes, por ejemplo:

- `hector-galeano-david`
- `corporacion-cultura-y-desarrollo`

### Regla editorial

- La biografia debe vivir en su archivo propio de autor.
- El post debe referenciar al autor, su imagen y la fecha de publicacion.
- Si cambia la bio de un autor, se actualiza una sola vez en su archivo y se refleja en todos sus articulos.
- No duplicar textos largos en cada post.
- Si una publicacion corresponde a una organizacion, crear un archivo de autor para esa organizacion y usar el mismo patron de slug.

### Informacion visible en la portada

Cada articulo de la portada muestra como minimo:

- Nombre del autor.
- Fotografia o imagen identificativa del autor.
- Fecha de publicacion.
- Categoria o categorias del articulo.
- Titulo, descripcion y enlace para leerlo.

La fotografia del autor funciona como boton para abrir su biografia en un modal. Por eso, `authorImage` debe apuntar a una imagen existente, legible y coherente con el archivo de autor. El nombre del autor en el frontmatter debe coincidir con el nombre mostrado en la bio.

La fecha se toma de `pubDate` y debe escribirse en formato ISO, por ejemplo `2026-09-10`. No escribir la fecha manualmente dentro del cuerpo del articulo.

### Busqueda y filtros

La portada permite buscar por titulo, descripcion, contenido, categorias y etiquetas. El autor se selecciona exclusivamente mediante la lista de filtros disponible.

- Usar titulos y descripciones claros, porque afectan la encontrabilidad del articulo.
- Escribir categorias y etiquetas consistentes; evitar crear variantes innecesarias como `Cultura`, `cultura` y `Culturas`.
- Mantener las etiquetas breves y relacionadas directamente con el contenido.

### Articulos destacados

Para dar prioridad editorial a ciertos contenidos, se puede marcar un post como destacado mediante la propiedad `featured: true` en el frontmatter.

Ejemplo:

```yaml
---
title: "Convocatoria abierta"
description: "Participa en la convocatoria del blog institucional."
pubDate: "2026-09-10"
author: "Corporación Cultura y Desarrollo"
authorSlug: "corporacion-cultura-y-desarrollo"
authorImage: "/images/ccd-auth.svg"
featured: true
category:
  - "Convocatorias"
tags: ["Anuncios", "Novedades"]
---
```

Criterio recomendado:

- Usar `featured: true` solo en 2 o 3 piezas prioritarias a la vez.
- Destacar convocatorias, lanzamientos institucionales o publicaciones con alto valor analítico.
- Mantener la portada equilibrada: no convertir todos los posts en destacados.
- Si un contenido deja de ser prioritario, quitar la bandera para que vuelva al flujo normal.

### Recomendacion para la gestion

Cuando se publique un nuevo articulo:

1. Revisar si el autor ya existe.
2. Si existe, reutilizar su slug y su foto.
3. Si no existe, crear un archivo `src/content/autores/<slug>.md` con la bio completa.
4. Incluir la referencia en el frontmatter del post.
5. Si el contenido requiere mayor relevancia editorial, marcar `featured: true`.
6. Verificar que el nombre del autor coincide exactamente con la informacion de la bio.

### Formulario de contacto

La portada usa el formulario para contacto general y los articulos lo usan para recibir comentarios o preguntas sobre el contenido especifico. El texto inicial del mensaje se mantiene breve para que el lector pueda escribir con claridad.

- En la portada, el encabezado es `Ponte en contacto con nosotros`.
- En los articulos, el encabezado es `Escribenos sobre este articulo`.
- El formulario solicita nombre, correo y mensaje.
- El mensaje debe tener al menos 20 caracteres.
- No incluir datos personales innecesarios en el contenido del articulo.
- Mantener actualizado el texto de privacidad si cambia el proveedor del formulario.

### Valoracion individual y analitica futura

Al final de cada articulo aparece el enlace `Comenta este articulo...`, seguido por la valoracion con estrellas y el bloque de compartir. El enlace lleva al formulario contextual del articulo.

La eleccion de estrellas se guarda en `localStorage` y solo representa la valoracion del navegador actual; no es un conteo global de lectores ni se presenta como una estadistica del articulo.

Cuando el lector selecciona estrellas, la referencia visible del formulario y el correo incluyen la valoracion, por ejemplo: `Referencia: Titulo · Autor · Fecha · Valoracion: ★★★★☆ (4/5)`. Si no selecciona ninguna, se envia `Sin valoracion`.

Actualmente no se muestran cifras de vistas, comentarios por email ni promedios de valoracion. No agregar valores inventados ni presentar metricas como verificadas sin una fuente real.

La futura analitica debe ser compatible con el despliegue estatico en GitHub Pages:

- Usar un servicio externo alojado, sin base de datos propia en este repositorio.
- Medir visitas y eventos sin enviar nombres, correos ni contenido de formularios.
- Documentar consentimiento, cookies, retencion y eliminacion de datos.
- Mostrar metricas solo cuando existan datos reales consultables.

## Lista de comprobacion

- [ ] La imagen tiene una orientacion y proporcion adecuadas.
- [ ] El lado mas largo no supera aproximadamente 720 px.
- [ ] El archivo esta optimizado y tiene un peso razonable.
- [ ] El nombre del archivo es descriptivo y no contiene espacios.
- [ ] La imagen incluye texto alternativo.
- [ ] La imagen se ve completa en computador y movil.
- [ ] La imagen no contiene texto cortado ni elementos fuera del encuadre.
- [ ] El autor tiene una bio unica en su archivo de autor.
- [ ] El post referencia al autor correctamente mediante `authorSlug` o identificador equivalente.
- [ ] La biografia no se duplica en cada articulo.
- [ ] El nombre del autor y la imagen coinciden con la identidad editorial del contenido.
- [ ] Los contenidos destacados tienen una prioridad editorial clara y no se sobreabusa de `featured: true`.
- [ ] `pubDate` esta presente y usa el formato ISO `AAAA-MM-DD`.
- [ ] El titulo y la descripcion permiten encontrar el articulo mediante la busqueda de portada.
- [ ] Las categorias y etiquetas usan nombres consistentes con publicaciones anteriores.
- [ ] El formulario de contacto conserva el texto de privacidad vigente.
- [ ] La valoracion individual se entiende como una interaccion local y no como una estadistica global.
- [ ] El enlace `Comenta este articulo...` aparece despues del texto final y lleva al formulario correcto.
- [ ] La valoracion seleccionada aparece en la referencia del formulario antes de enviar.
