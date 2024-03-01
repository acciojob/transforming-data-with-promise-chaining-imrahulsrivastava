const input = document.getElementById("ip");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const number = parseInt(input.value);

  if (isNaN(number)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  startTransformation(number)
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return multiplyByTwo(result);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return subtractThree(result);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return divideByTwo(result);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return addTen(result);
    })
    .then((finalResult) => {
      output.innerText = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      output.innerText = `Error: ${error.message}`;
    });
});

function startTransformation(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 2000);
  });
}

function multiplyByTwo(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 1000);
  });
}

function subtractThree(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number - 3);
    }, 1000);
  });
}

function divideByTwo(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number / 2);
    }, 1000);
  });
}

function addTen(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number + 10);
    }, 1000);
  });
}
