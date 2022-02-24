var express = require('express');
var router = express.Router();
const {Compunies} = require('../models');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index.html', function(req, res, next) {
  res.render('index');
});



router.get('/blog.html', async function(req, res, next) {
  let compunies = await Compunies.findAll();
  res.render('blog', {compunies});

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


router.get('/jobs.html', function(req, res, next) {
  res.render('jobs');
});


router.get('/main.html', function(req, res, next) {
  res.render('main');
});


router.get('/single-blog.html', function(req, res, next) {
  res.render('single-blog');
});


module.exports = router;
