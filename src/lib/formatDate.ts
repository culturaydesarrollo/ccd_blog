const dateFormatter = new Intl.DateTimeFormat('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
