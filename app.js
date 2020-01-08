const acute = new AcuteFetch();
const url = 'https://jsonplaceholder.typicode.com/posts/';
const urlC = 'https://jsonplaceholder.typicode.com/posts/1';
const data = {
  title: 'sunt aut facere repellat provident ',
  body: 'quia et suscipit\nsu'
};

const dataUpdate = {
  title: 'my new title',
  body: 'damn'
};
acute
  .get(url)
  .then(data => console.log(data))
  .catch(err => console.log(`Big Error ${err}`));

acute
  .post(url, data)
  .then(data => console.log(data))
  .catch(err => console.log(`Big Error ${err}`));

acute
  .put(urlC, dataUpdate)
  .then(data => console.log(data))
  .catch(err => console.log(`Big Error ${err}`));

acute
  .del(urlC)
  .then(() => console.log(`object deleted`))
  .catch(err => console.log(`Big error ${err}`));
