import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('places', t => {
    t.string('name');
    t.string('url');
    t.integer('violentCrimeRate');
    t.integer('propertyCrimeRate');
    t.integer('publicTransit');
    t.integer('walkability');
    t.integer('rent');
    t.integer('commuteDistance');
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('places');
}
