/* eslint-disable prefer-destructuring */
//? DOM ELEMENTS
const btns = Array.from(document.querySelectorAll('button'))
const form = document.querySelector('form')
const formActivity = document.querySelector('form span')
const input = document.querySelector('input')
const error = document.querySelector('.error')

// Default activity - updated by button clicks
let activity = 'running'

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
  })
})
