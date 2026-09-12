

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-EG", {
  currency: "EGP",
  style: "currency",
});

const FormatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
