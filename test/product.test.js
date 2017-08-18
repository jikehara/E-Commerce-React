process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const Product = require('../models/Product')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('Products', () => {
  //  clear all the test data before we begin
  beforeEach((done) => {
    Product.remove({}, err => {
      done()
    })
  })

  describe('/GET products', () => {
    it('It should GET all products', done => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a('array')
          res.body.data.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/POST product', () => {
    it('It should not post a product without all fields', done => {
      const product = { name: 'Candy' }
      chai.request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.message.should.have.property('errors')
          res.body.should.have.property('data')
          res.body.should.have.property('data').eql(null)
          done()
        })
    })

    it('It should POST a product with all fields', done => {
      const product = new Product({
        name: 'whatever',
        price: 3.50,
        image: 'definitelyapicture.jpg'
      })
      chai.request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.message.length.should.be.above(0)
          res.body.should.have.property('data')
          res.body.data.should.be.a('object')
          done()
        })
    })
  })

  describe('/GET/:product_id', () => {
    it('It should GET one product with all the fields', done => {
      const product = new Product({
        name: 'a thing',
        price: 5,
        image: 'picture.png'
      })
      product.save((err, product) => {
        chai.request(server)
          .get(`/api/products/${product._id}`)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.message.length.should.be.above(0)
            res.body.should.be.a('object')
            res.body.should.have.property('data')
            res.body.data.should.be.a('object')
            done()
          })
      })
    })
  })

  describe('/DELETE/:product_id', () => {
    it('It should DELETE a product', done => {
      const product = new Product({
        name: 'thing',
        price: 6,
        image: 'picture'
      })
      product.save((err, product) => {
        chai.request(server)
          .delete(`/api/products/${product._id}`)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.message.length.should.be.above(0)
            res.body.should.be.a('object')
            res.body.should.have.property('data')
            done()
            res.body.data.should.eql({})
          })
      })
    })
  })
})
