import { Modal } from 'materialize-css'
import './graph'
import db from './firebase'

//? CACHE UI ELEMENTS
const modal = document.querySelector('#modal')
const form = document.querySelector('form')
const name = document.querySelector('#name')
const parent = document.querySelector('#parent')
const department = document.querySelector('#department')

//? MODAL FUNCTIONALITY
Modal.init(modal)

//? CONNECT FORM TO FIREBASE
form.addEventListener('submit', e => {
  e.preventDefault()

  // 'parent' field can be empty (if you're at the top)
  if (name.value.trim() && department.value.trim()) {
    db.collection('employees')
      .add({
        name: name.value.trim(),
        parent: parent.value.trim(),
        department: department.value.trim(),
      })
      .then(() => {
        Modal.getInstance(modal).close()
        form.reset()
      })
  }
})
