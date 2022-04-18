var express = require('express');
var router = express.Router();
const {blogs} = require('../models');
const {Compunies} = require('../models');
const {Customers} = require('../models');


router.get('/', async function(req, res, next) {
  let CustomersList = await Customers.findAll();
  res.render('index', {CustomersList});
});

router.get('/index.html', async function(req, res, next) {
  let CustomersList = await Customers.findAll();
  res.render('index', {CustomersList});
});



router.get('/blog.html', async function(req, res, next) {
  let blogList = await blogs.findAll();
  console.log(123, blogList);
  res.render('blog', {blogList});

});




router.get('/candidate.html', function(req, res, next) {
  res.render('candidate');
});


router.get('/contact.html', function(req, res, next) {
  res.render('contact');
});


router.get('/elements.html', function(req, res, next) {
  res.render('elements');
});


router.get('/job_details.html', function(req, res, next) {
  res.render('job_details');
});


router.get('/jobs.html', async function(req, res, next) {
  let CompuniesList = await Compunies.findAll();
  console.log(123, CompuniesList);
  res.render('jobs', {CompuniesList});
});


router.get('/main.html', function(req, res, next) {
  res.render('main');
});


router.get('/single-blog.html', function(req, res, next) {
  res.render('single-blog');
});


module.exports = router;
