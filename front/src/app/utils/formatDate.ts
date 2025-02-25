
export function formatDate(date: Date, ) {
    return Intl.DateTimeFormat("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
}
