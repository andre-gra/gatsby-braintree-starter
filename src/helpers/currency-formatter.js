export const formatPrice = (price, currency = "EUR") => {
  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
};
