'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Produto = use('app/Models/Produto')
/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {
  /**
   * Show a list of all produtos.
   * GET produtos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  async store ({request, response}){

    const input = request.all();
    const prod = await Produto.create (input);
    return response.json({data : prod});

  }

  async index ({response}) {

    const produto = await Produto.all();
    return response.json ({data : prods});
  }

  async show ({params, response}){
    const prod = await Produto.find (params, id);
    if (!prod){

      return response.json ({ data:null, msg: 'nenhuma informação encontrada ..' });
      
    }
    return response.json({data : prod});
  }

  async destroy ({params, response}){
    const prod = await Produto.find(params.id);
    if (!prod){

      return response.json({data:null, msg:'Nenhuma informação encontrada..'});
    }
    prod.delete ();
    return response.json({data:prod});
  }

  async update ({ params,request, response}){

    const input = request.all();
    const prod = await Produto.find(params.id);
    if (!prod){

      return response.json ({data:null, msg:'Nenhuma informação encontrada ..'})
    }
    prod.merge(input);
    await prod.save();
    return response.json({data: prod});
  }

  /**
   * Render a form to be used for creating a new produto.
   * GET produtos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new produto.
   * POST produtos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing produto.
   * GET produtos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProdutoController
