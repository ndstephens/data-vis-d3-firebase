/* eslint-disable prefer-destructuring */
import './graph'
import db from './firebase'

//? DOM ELEMENTS
const btns = Array.from(document.querySelectorAll('button'))
const form = document.querySelector('form')
const formActivity = document.querySelector('form span')
const input = document.querySelector('input')
const error = document.querySelector('.error')

// Default activity - updated by button clicks
let activity = 'running'

//? BUTTON EVENT LISTENERS
btns.forEach(btn => {
  btn.addEventListener('click', e => {
    // get activity associated with button
    activity = e.target.dataset.activity

    // add or remove 'active' class
    btns.forEach(button => button.classList.remove('active'))
    e.target.classList.add('active')

    // set id of input field
    input.setAttribute('id', activity)

    // update text in form
    formActivity.textContent = activity

    // focus input
    input.focus()
  })
})

//? FORM SUBMIT
form.addEventListener('submit', e => {
  e.preventDefault()

  const distance = parseFloat(input.value.trim(), 10)

  if (!distance) {
    error.textContent = 'Please enter a valid distance'
  } else {
    db.collection('activities')
      .add({
        distance,
        activity,
        date: new Date().toString(),
      })
      .then(res => {
        form.reset()
        input.focus()
      })
  }
})

//? Reset error when typing
input.addEventListener('input', e => {
  error.textContent = ''
})
