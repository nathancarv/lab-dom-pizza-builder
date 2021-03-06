// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()


  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}
//$('.btn btn-pepperonni').click((e)=> {
  //{$('.btn btn-pepperonni').toggleClass('active')
  //addStuff()
//}

 function renderMushrooms() {
  //  document.querySelectorAll('.mushroom').forEach(function($mush){
  //    if (state.mushrooms) {
  //      $mush.style.visibility = "visible";
  //    }
  //    else {
  //      $mush.style.visibility = "hidden";
  //    }
  //  })

  $('.mushroom').each(function(){
    if (state.mushrooms) {
       this.style.visibility = "visible";
     }
     else {
       //this.style.visibility = "hidden";
       $(this).css({visibility:'hidden'})
     }  
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  $('.green-pepper').each(function(){
    if(state.greenPeppers){
      this.style.visibility = "visible";
    }
    else{
      $(this).css({visibility: 'hidden'})
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
 $('.sauce-white').each(function(){
   if(state.whiteSauce){
     $(this).css({visibility: 'visible'})
   }
   else{
     $(this).css({visibility: 'hidden'})
   }
 })
   // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  $('.crust').each(function(){
    if(state.glutenFreeCrust){
      $(this).css({visibility: 'visible'})
    }
    else{
      $(this).css({visibility: 'hidden'})
    }
  })
   
 }
   // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`


function renderButtons() {

    $('.btn-pepperonni, .btn-mushrooms, .btn-green-peppers, .btn-sauce, .btn-crust').click(function(e){
      $(this).toggleClass('active')
    })


  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderPrice() {
  let totalPrice = basePrice ;

  for (let i in state) {
    if (state[i] == true){
    totalPrice += ingredients[i].price;
 
  }
    $('.total').text('$' + totalPrice)
  }
}
  // Iteration 4: change the HTML of `<aside class="panel price">`



renderEverything()
renderButtons()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

//  Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function(){
  state.mushrooms = !state.mushrooms
   renderEverything()
 }

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function(){
  state.greenPeppers = !state.greenPeppers
   renderEverything()
 }

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function(){
  state.whiteSauce = !state.whiteSauce
   renderEverything()
 }

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function(){
  state.glutenFreeCrust = !state.glutenFreeCrust
   renderEverything()
 }