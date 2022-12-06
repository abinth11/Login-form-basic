var express = require('express');
var router = express.Router();

// import app from '../app'
//username and password
const User = { 
  name:'abin',
  password:'123'
}
let err = false;
const products=[
  {
    brand:'Apple',
    model:'iphone 14',
    price:130000,
    category:'mobile',
    description:'fastest phone',
    image:'images/iphone14.jpeg'

  },
  {
    brand:'Samsung',
    model:'s22 ultra',
    price:110000,
    category:'mobile',
    description:'best display',
    image:'images/s22.webp'

  },
  {
    brand:'Nothing',
    model:'nothing phone 1',
    price:40000,
    category:'mobile',
    description:'light with led bulbs enjoyy..............',
    image:'images/nothing.webp'

  },
  {
    brand:'Apple',
    model:'Macbook pro',
    price:2300000,
    category:'laptop',
    description:'Best perfomance',
    image:'images/mac.jpg'

  },
  {
    brand:'hp',
    model:'pavilion',
    price:60000,
    category:'laptop',
    description:'budget friendly',
    image:'images/pavillion.png'

  },
  {
    brand:'Asus',
    model:'rog',
    price:1500000,
    category:'laptop',
    description:'Best for gaming',
    image:'images/rog.png'

  },
  {
    brand:'Apple',
    model:'earbuds pro',
    price:25000,
    category:'earbuds',
    description:'best perfomance',
    image:'images/pro.jpeg'

  },
  {
    brand:'Samsung',
    model:'buds',
    price:15000,
    category:'earbuds',
    description:'with noise cancellation',
    image:'images/sbuds.jpg'

  },
  {
    brand:'Boat',
    model:'airdopes',
    price:3000,
    category:'earbuds',
    description:'budget friendly',
    image:'images/boat.png'

  }
]
router.get('/', function(req, res, next) {
  if(req.session.user )
  {
    res.redirect('/home');
  }
  else if(err){
    res.render('index', {error:"Invalid username or password"})
    err=false;
  }
  else
  {
    res.render('index')
  }
 
});

// a variable to save a session


router.post('/login',(req,res) => {
  if(req.body.name===User.name&&req.body.password===User.password){
    req.session.user=req.body.name;
      res.redirect("/home")
  }else
  {
    err=true;
    res.redirect('/');
  }
});

router.get('/home',(req,res)=>{
  if(req.session.user)
  {
    res.render('home',{products,user:req.session.user})
  }
  else
  {
    res.render('index')
  }
})

router.get('/logout',(req,res)=>{
  req.session.destroy(function(err){
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.redirect('/');
    }

  });
})
module.exports = router;
