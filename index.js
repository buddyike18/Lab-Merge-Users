// index.js

function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  const today = new Date();
  combinedObject.merge_date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return combinedObject;
}

module.exports = combineUsers;

// Example usage (for manual testing):
// const result = combineUsers(['alice', 'bob'], ['carol'], ['dave', 'eve']);
// console.log(result);

/* Expected output:
{
  users: ['alice', 'bob', 'carol', 'dave', 'eve'],
  merge_date: '4/26/2025'
}
*/
