$(document).ready(function () {

  $('#registrationForm').validate(
    {
      rules: {
        firstName: "required",
        lastName: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10
        },
        birth_date: "required",
        "subject": {
          required: true,
          minlength: 1
        }
      },
      messages: {
        firstName: {
          required: "Please Enter Student's First Name"
        },
        lastName: {
          required: "Please Enter Student's Last Name"
        },
        email: {
          required: "Enter student's correct email"
        },
        phone: {
          required: "Enter student's Phone number(10 Digit) "
        },
        birth_date: {
          required: "Enter Students DOB"
        },
        subject:{
          required:"You have to select at least one subject"
        }
      }
    }
  )
})





