const node_get = async () => {
  let url = 'https://api.thecatapi.com/v1/images/search?size=full';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (e) {
    console.trace(`${e.message}`); 
  }
};

const catFunction = async () => {
  const data = await node_get();

  document.getElementById('id').innerHTML = data[0]['id'];
  document.getElementById('url').innerHTML = data[0]['url'];

  const html = `<img src= ${data[0]['url']} >`;
  document.getElementById('image').innerHTML = html;
};

catFunction();


