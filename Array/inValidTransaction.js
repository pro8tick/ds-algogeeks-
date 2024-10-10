//lit-code 1169
var invalidTransactions = function (transactions) {
  const parsedTransaction = new Map();
  const res = [];
  for (let transaction of transactions) {
    transaction = transaction.split(",");
    let name = transaction[0];
    if (!parsedTransaction.has(name)) {
      parsedTransaction.set(name, []);
    }
    parsedTransaction.get(name).push(transaction);
  }

  for (let transaction of transactions) {
    const [name, time, price, city] = transaction.split(",");
    if (Number(price) > 1000) {
      res.push(transaction);
      continue;
    }
    for (let [, ptime, , pCity] of parsedTransaction.get(name)) {
      if (Math.abs(time - ptime) <= 60 && city != pCity) {
        res.push(transaction);
        break;
      }
    }
  }
  return res;
};
