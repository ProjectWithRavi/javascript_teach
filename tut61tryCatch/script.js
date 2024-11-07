let a = "ravi";
console.log(a);
try {
  function myfun() {
    throw new Error("this is error");
  }

  myfun();
} catch (error) {
  console.log(error);
}
console.log("hello");
