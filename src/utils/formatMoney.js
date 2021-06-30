const numberFormatter = new Intl.NumberFormat();

export default function formatMoney(amount) {
  return numberFormatter.format(amount);
}
