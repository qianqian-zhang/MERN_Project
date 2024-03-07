function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved!');
    }, 2000);
  });
}

async function myFunc() {
  console.log('first line');
  const res1 = await resolveAfter2Seconds();
  console.log(res1);

  console.log('third line');
}
myFunc();
