import fs from 'fs/promises';

//First we are going to create an async function to get users

export const getUsers = async (filePath) => {

  try {

    const data = await fs.readFile(filePath);
    console.log(data.toString());
    return JSON.parse(data);

  } catch (e) {
    console.log('e.message');
  }
};

// Let's create a function to render the data we retrieved onto our HTML, remember that your data is json! If you need help with recalling how to get values from an object, last week class material on arrays is helpful here!

export const countUsers = async () => {
  let users = await getUsers('3-simple-fs-and-jest-example/data.json');

  const userCount = users.length;

  return userCount;
};

countUsers();




