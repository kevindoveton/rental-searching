import { db } from './knex';
import { getAllData, getData } from './getData';

(async () => {
  // const details = await getAllData()
  const details = await getAllData();

  for (const d of details) {
    await db('places').insert(d)
  }
  db.destroy()
})()
