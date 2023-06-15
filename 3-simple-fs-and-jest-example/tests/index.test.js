import { getUsers, countUsers } from '../index';



describe('Users test suite', () => {
  
  test('getUsers should return an array of users', async () => {
    const users = await getUsers('3-simple-fs-and-jest-example/data.json');
    
    //test that what we return from getUsers is an array
    expect(Array.isArray(users)).toBe(true);

  });
  
  test('countUsers should return the correct user count', async () => {
    const userCount = await countUsers();
    //test that countUsers correctly receives the user array, and counts them (this would not work unless we know what data we are receiving, of course!)
    expect(userCount).toBe(2);

  });

});
