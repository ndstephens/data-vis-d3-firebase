import db from './firebase'
import './graph'
import './jscolor'

//? Cache UI elements
const form = document.querySelector('form')
const name = document.querySelector('#name')
const cost = document.querySelector('#cost')
const color = document.querySelector('#color')
const error = document.querySelector('#error')

//? Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault()

  // Display error if either input is empty
  if (!name.value.trim() || !cost.value.trim()) {
    error.textContent = 'Please enter values before submitting'
  }

  // Create an 'item' object
  const item = {
    name: name.value.trim(),
    cost: parseInt(cost.value.trim(), 10),
    color: `#${color.value}`,
  }

  // Save to db, reset form
  db.collection('expenses')
    .add(item)
    .then(res => {
      form.reset()
      name.focus()
    })
})

name.addEventListener('input', () => {
  error.textContent = ''
})
cost.addEventListener('input', () => {
  error.textContent = ''
})
