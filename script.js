// APPEARANCE BURGER MENU
const BurgerMenu = document.querySelector('.burger_menu')
const Menu = document.querySelector('.navigation')
BurgerMenu.addEventListener('click', function () {
  BurgerMenu.classList.toggle('active')
  Menu.classList.toggle('active')
})
//APPEARANCE UNCHOR
const AnchorTop = document.querySelector('.anchor_top_contain')
window.addEventListener('scroll', AddClassActive)
function AddClassActive() {
  if (window.pageYOffset > 100) {
    AnchorTop.classList.add('active')
  } else {
    AnchorTop.classList.remove('active')
  }
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// VALIDATION FORMS

// const form = document.forms['form'] // считываем форму
// const formArr = Array.from(form) // формируем массив из элементов формы
// const validFormArr = [] // в этом массиве хранятся поля, которые нужно проверить
// const button = form.elements['button'] // считываем кнопку

// formArr.forEach((el) => {
//   if (el.hasAttribute('data-reg')) {
//     el.setAttribute('is-valid', '0')
//     validFormArr.push(el)
//   }
// })

// form.addEventListener('input', inputHandler)
// button.addEventListener('click', buttonHandler)

// function inputHandler({ target }) {
//   if (target.hasAttribute('data-reg')) {
//     inputCheck(target)
//   }
// }

// function inputCheck(el) {
//   const inputValue = el.value
//   const inputReg = el.getAttribute('data-reg')
//   const reg = new RegExp(inputReg)
//   if (reg.test(inputValue)) {
//     el.setAttribute('is-valid', '1')
//     el.style.border = '2px solid rgb(0, 196, 0)'
//   } else {
//     el.setAttribute('is-valid', '0')
//     el.style.border = '2px solid rgb(255, 0, 0)'
//   }
// }

// function buttonHandler(e) {
//   const allValid = []
//   validFormArr.forEach((el) => {
//     allValid.push(el.getAttribute('is-valid'))
//   })
//   console.log(allValid)
//   const isAllValid = allValid.reduce((acc, current) => {
//     return acc && current
//   })

//   if (!Boolean(Number(isAllValid))) {
//     e.preventDefault()
//   }
// }

// // Get the form elements
// let form = document.getElementById('feedbackForm')
// let name = document.getElementById('name')
// let email = document.getElementById('email')
// let feedback = document.getElementById('feedback')
// let submitBtn = document.getElementById('submitBtn')

// // Add event listener to the submit button
// submitBtn.addEventListener('click', validateForm)

// // Validate form when Submit button is clicked
// function validateForm(e) {
//   // Check if name field is empty
//   if (name.value === '') {
//     alert('Name field cannot be empty')
//     e.preventDefault()
//   }

//   // Check if email field is empty
//   if (email.value === '') {
//     alert('Email field cannot be empty')
//     e.preventDefault()
//   }

//   // Check if feedback field is empty
//   if (feedback.value === '') {
//     alert('Feedback field cannot be empty')
//     e.preventDefault()
//   }
// }

// Get the form element
var form = document.getElementById('form')

// Set up regular expression to validate the form
var nameRegex = /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/
var phoneRegex = /^((\+7|7|8)+([0-9]){10})$/
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
var messageRegex = /''/
let UserName = document.getElementById('user_name')
let UserPhone = document.getElementById('user_phone')
let UserEmail = document.getElementById('user_email')
let UserMessage = document.getElementById('user_message')
let btnSubmit = document.getElementById('button')
console.log(btnSubmit)

// Event handler for submitting the form
form.addEventListener('input', function (event) {
  // Get the inputs
  let fio = document.getElementById('user_name').value
  let phone = document.getElementById('user_phone').value
  let email = document.getElementById('user_email').value
  let message = document.getElementById('user_message').value
  function messageIsNotEmpty() {
    if (message == '') {
      return false
    } else {
      return true
    }
  }
  console.log(messageIsNotEmpty(message))

  if (nameRegex.test(fio)) {
    UserName.style.border = '2px solid #85CD30'
  } else {
    UserName.style.border = '2px solid #cd3030'
  }
  if (phoneRegex.test(phone)) {
    UserPhone.style.border = '2px solid #85CD30'
  } else {
    UserPhone.style.border = '2px solid #cd3030'
  }
  if (emailRegex.test(email)) {
    UserEmail.style.border = '2px solid #85CD30'
  } else {
    UserEmail.style.border = '2px solid #cd3030'
  }
  // Validate the form
  if (
    nameRegex.test(fio) &&
    phoneRegex.test(phone) &&
    emailRegex.test(email) &&
    messageIsNotEmpty(message)
  ) {
    btnSubmit.classList.remove('btn_block')
  } else {
    btnSubmit.classList.add('btn_block')
  }
})
