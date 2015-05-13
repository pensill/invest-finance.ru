$(document).ready(function(){

    $("#contact-form").validate({

       rules:{

            name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            email:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
       },

       messages:{

            name:{
                required: "Поле обязательно для заполнения",
            },

            email:{
                required: "Поле обязательно для заполнения",
            },

       }

    });

});