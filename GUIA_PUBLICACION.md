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

## Lista de comprobacion

- [ ] La imagen tiene una orientacion y proporcion adecuadas.
- [ ] El lado mas largo no supera aproximadamente 720 px.
- [ ] El archivo esta optimizado y tiene un peso razonable.
- [ ] El nombre del archivo es descriptivo y no contiene espacios.
- [ ] La imagen incluye texto alternativo.
- [ ] La imagen se ve completa en computador y movil.
- [ ] La imagen no contiene texto cortado ni elementos fuera del encuadre.
