// promis
// существует следующие состояния:
// {
// 	status: pending || fulfilled || rejected
// 	result:
// }

fetch("https://shopBooks/authors", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fetch("https://shopBooks/authors/32", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fetch("https://shopBooks/authors/32/books", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            fetch("https://shopBooks/authors/32/books/3", (err, data) => {
              if (err) {
                console.log(err);
              } else {
              }
            });
          }
        });
      }
    });
  }
});
// верхни код после рефакторинга и прописан через then/catch
fetch("https://shopBooks/authors")
  .then((authors) => {
    return fetch("https://shopBooks/authors/32");
  })
  .then((author) => {
    return fetch("https://shopBooks/authors/32/books");
  })
  .then((books) => {
    return fetch("https://shopBooks/authors/32/books/3");
  })
  .then((data) => {})
  .catch((err) => {
    console.log("some err", err);
  });

const server = {
  getData() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(console.log('some data'), 2000)
        reject(console.log("no data"), 2000);
      });
      return promise;
    });
  },
};

const pr = server.getData();
console.log("Promise", pr);

// методы Promise: .then .catch .finally
// pr.then((data) => {
//     console.log('data from server', data);
// })
// pr.catch((err) => {
//     console.log('some error from server', err);
// })
// pr.finally(()=> {
//     console.log('finally');
// })
pr.then((data) => {
  console.log("then", data);
  return 10;
})
  .then((data2) => {
    console.log("then2", data2);
    return 20;
  })
  .then((data3) => {
    console.log("then3", data3);
  })
  .catch((err) => {
    console.log("error", err);
  })
  .then((data4) => {
    console.log("then4", data4);
  });

// Напишите функцию delay(ms) которая возвращает промис resolve через ms миллисекунд

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
