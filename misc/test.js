function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!obj[pre]) {
      return false;
    }
  }
  return true;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);
