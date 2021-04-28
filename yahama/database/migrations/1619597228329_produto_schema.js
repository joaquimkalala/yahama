'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome')
      table.float('preco')
      table.integer('qtd')
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
