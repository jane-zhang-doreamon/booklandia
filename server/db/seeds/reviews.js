/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {id: 1, review: "Iris's favourite, borrowed two times.", book_id:4},
    {id: 2, review: 'Iris likes finding Momo, and can spot Momo very quickly.', book_id:5},
    {id: 3, review: '1 April 2023, Iris requested to find the runway egg book in the library. She is really into that story.', book_id: 4},
    {id: 4, review: "The book beautifully combines vibrant illustrations with a simple yet engaging storyline. The book's interactive elements, such as the holes eaten through the pages, add a playful touch that enhances the reading experience.", book_id: 1},
    {id: 5, review: "The book follows Peppa and her friends as they hop aboard a vibrant fire engine and respond to emergencies in their community. The colorful illustrations and simple text make it easy for young readers to follow along and immerse themselves in the story.", book_id:3},
    
  ]);
};
