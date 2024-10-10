const filterObj = (obj, ...allowedFields) => {
  console.log(obj);
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

filterObj({ name: "Pratik Adminupdated" }, "name", "phone", "address");
