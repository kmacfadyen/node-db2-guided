/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.table('fruits', table => {
    // table.increments('fruits_id')
    // table.decimal('avg_weight_oz').notNullable()
    // table.boolean('delicious')
    table.string('color', 50).defaultTo('green')
  })
}
/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = async function (knex) {
  await knex.schema.table('fruits', table => {
    table.dropColumn('color')
  })
}
