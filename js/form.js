//MADE BY Yagna Zalavadia

window.onload = function() {
    
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    // Custom function to return the element by Id
    var $1 = function(id) { 
        return document.getElementById(id); 
    };
        
    // Focus on first field on load
    $1("p_name").focus();
    
    var submitButton = $1("submit_button");
    
    // On click of submit button, first validate and then store in local storage
    submitButton.addEventListener("click" , function(){
        var firstName = $1("p_name").value;
        var lastName = $1("g_name").value;
        var personage = parseInt($1("p_age").value);
        var personGender = $("input[name=gender]:checked").val();
        var mobNo = $1("g_number").value;
        var email = $("#email").val().trim();
        var entrydate = document.getElementById('date');
    
      
        //Validations starts here
        if (firstName == null || firstName.length == 0) {
            $1("p_name_error").innerHTML = "Please enter your first name";
        } else {
            $1("p_name_error").innerHTML = "";
        }
        
        if (lastName == null || lastName.length == 0) {
            $1("g_name_error").innerHTML = "Please enter your last name";
        } else {
            $1("g_name_error").innerHTML = "";
        }
        
        if (personage == null || personage.length == 0) {
            valid=false;
            $1("p_age_error").innerHTML = "Please enter your age";
        } 
        else if (isNaN(personage) || personage <= 0) {
            $1("p_age_error").innerHTML = "Please enter a valid age";
        } else {
            $1("p_age_error").innerHTML = "";
        }
        
        if (mobNo == null || mobNo.length == 0) {
            $1("g_number_error").innerHTML = "Please enter your contact no";
        } else if (mobNo.length != 10 || isNaN(mobNo)) {
            $1("g_number_error").innerHTML = "Please enter correct contact no";
        } else {
            $1("g_number_error").innerHTML = "";
        }
        
        if (email == null || email.length == 0) {
             valid=false;
            $1("g_email_error").innerHTML = "Please enter your email id";   
        }
        else if(!emailPattern.test(email)){
            $1("g_email_error").innerHTML = "Please enter a valid email id";
        }
        else{
            $1("g_email_error").innerHTML = "";
        }  

        
        if (("entrydate").value == 0){
            $1("entry_date_error").innerHTML = "Please select a date";
        }
        else{
            $1("entry_date_error").innerHTML = ""; 
        }
        
        
        if (!firstName.length == 0 && !lastName.length == 0 && !isNaN(personage) && !mobNo.length == 0 && 
        !mobNo.length != 10 && !isNaN(mobNo) && !email.length == 0) {
            passengerDetailsObj = {
                firstName,
                lastName,
                personage,
                personGender,
                mobNo,
                email
            };

            //Localstorage has key passengerDetails        
            localStorage.setItem("passengerDetails", JSON.stringify(passengerDetailsObj));
            alert("Your data successfully inserted!");
        
        //Validations end
            //calculate amounts
            
        };
    });
};


