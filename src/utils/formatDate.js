const dateFormatter = new Intl.DateTimeFormat();

export default function formatDate(date) {
  return dateFormatter.format(Date.parse(date));
}
