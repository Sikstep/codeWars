const fetch = (url) => {
  return new Promise((res, rej) => {
    switch (url) {
      case "google": {
        setTimeout(() => {
          res({ data: "data from google" });
        }, 3000);
        break;
      }
      case "microsoft": {
        setTimeout(() => {
          res({ data: "data from microsoft" });
        }, 2000);
        break;
      }
      case "yandex": {
        setTimeout(() => {
          res({ data: "data from yandex" });
        }, 1000);
        break;
      }
      default: {
        setTimeout(() => {
          res({ data: "Unknown data" });
        }, 100);
        break;
      }
    }
  });
};

fetch("google")
  .then((res) => {
    console.log(res.data);
    return fetch("microsoft");
  })
  .then((res) => {
    console.log(res.data);
    return fetch("yandex");
  })
  .then((res) => {
    console.log(res.data);
    return fetch("ddd");
  })
  .then((res) => {
    console.log(res.data);
  });

const f = () => {
  Promise.all([
    fetch("google"),
    fetch("microsoft"),
    fetch("yandex"),
    fetch("ddd"),
  ]).then((data) => console.log(date));
};
// f();

const f2 = async () => {
  let g = await fetch("google");
  console.log(g.data);
  let m = await fetch("microsoft");
  console.log(m.data);
  let y = await fetch("yandex");
  console.log(y.data);
  let d = await fetch("ddd");
  console.log(d.data);
};
