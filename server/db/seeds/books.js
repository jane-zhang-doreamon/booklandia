
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {id: 1, name: 'The Very Hungry Caterpillar', picture:"https://cdn2.penguin.com.au/covers/original/9780241003008.jpg"},
    {id: 2, name: "Peppa Pig: Peppa's Magical Creatures", picture:"https://cdn2.penguin.com.au/covers/original/9780241476567.jpg"},
    {id: 3, name: "Peppa Pig: Peppa's Fire Engine", picture:"https://cdn2.penguin.com.au/covers/original/9780241607084.jpg"},
    {id: 4, name: 'The Runaway Egg', picture:"https://cdn2.penguin.com.au/covers/original/9780553523195.jpg"},
    {id: 5, name: "Let's Find Momo!", picture:"https://cdn2.penguin.com.au/covers/original/9781594749582.jpg"},
    {id: 6, name: "Let's Find Yaya and Boo at Home!", picture:"https://cdn2.penguin.com.au/covers/original/9781683693666.jpg"},
  ]);
};
