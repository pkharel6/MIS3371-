
/* 
Program name: homework2.js
Author: Prem Kharel
Date created: 03/o2/2026
Date last edited: 03/27/2026
Version: 1.0
Description: This is a javascript file for the validation of the patient regestration form named homework2.html.
*/




// getting user's server date at the time of form filling
const date = new Date().toLocaleString();
        document.getElementById("todaydate").innerText=date;
       
 // Checking User id and email 
     function validInput(){
            const email = document.getElementById("email").value;
            const userid = document.getElementById("uid").value;

            if(email === userid){
                alert("Error ! User ID and Email cannot be the same.");
                return false;
            }
           return true;
        }
// Checking user's input
     function checkStatus(value, pattern = null, required = true) 
     {
    if (required && !value) return "ERROR: Required";
    if (pattern && !pattern.test(value)) return "ERROR: Invalid format";
    return "PASS";
    }

// for user to review their input
        function reviewForm()
        {
            const firstname = document.getElementById("fstname").value;
            let fnpattern=/^[A-Za-z'-]{1,30}$/;
            const middleinitial = document.getElementById("mni").value.trim();
            let mnpattern=/^[A-Za-z]$/;
            const lastname = document.getElementById("ln").value.trim();
            let lnpattern=/^[A-Za-z'-]{1,30}$/;
            const dateOfBirth= document.getElementById("dateob").value;
            const Social_Security= document.getElementById("ssn").value;
            let ssnpattern=/^[0-9]*$/;
            const Address_line_1= document.getElementById("ad1").value;
            const Address_line_2= document.getElementById("ad2").value;
            const City = document.getElementById("ct").value;
            const State = document.getElementById("st").value;
            const Zipcode = document.getElementById("zc").value;
            let shortZip = Zipcode.substring(0,5);
            let zippattern=/^[0-9]{5}(-[0-9]{4})?$/;
            const email= document.getElementById("email").value.trim();
            const Phone_number_1= document.getElementById("ph1").value;
            let phpattern=/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
            const Phone_Number_2= document.getElementById("ph2").value;
            const Symptoms= document.getElementById("sym").value;
            // for capturing the user's diseases history
            let Diseases = "";
            let boxes = document.querySelectorAll("input[name='cbox']:checked");
            boxes.forEach(function(box){
                Diseases+= box.value + ", ";
            });
          
            const Language = document.querySelector("input[name='eng']:checked")?.value;
            const Gender = document.querySelector("input[name='sex']:checked")?.value;
            let Vaccinated = document.querySelector("input[name='v']:checked")?.value;
    
            const Have_Insuarace = document.querySelector("input[name='y']:checked")?.value;
            const Feeling_good= document.getElementById("slider").value;
            const userid= document.getElementById("uid").value.trim();
            let uidpattern=/^[a-zA-Z][a-zA-Z0-9_-]{4,29}$/;
            const password= document.getElementById("pword").value;
            let pwpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
            const re_password= document.getElementById("Rpword").value;
            let matchStatus = (password === re_password) ? "PASS,PASSWORD MATCHED" : "ERROR: Passwords do not match";

// formating/structure of table
            var table= "<h1> Please Review Your Input </h1>  "
            table += "<table border = '1' cellpadding='5'>";
            table += "<tr><th>Field</th> <th>Value</th> <th>Result</th> </tr>";
            table += "<tr> <td>First Name </td><td>" + firstname +"</td> <td>" + checkStatus(firstname,fnpattern) +"</td></tr>";
            table += "<tr> <td>Middle Initial </td><td>" + middleinitial +"</td> <td>" + checkStatus(middleinitial,mnpattern) +"</td></tr>";
            table += "<tr> <td>Last Name </td><td>" + lastname +"</td><td>" + checkStatus(lastname,lnpattern) +"</td> </tr>";
            table += "<tr> <td>Date of Birth </td><td>" + dateOfBirth +"</td><td>" + checkDOB(dateOfBirth) +"</td></tr>";
            table += "<tr> <td>Social Security </td><td>" + Social_Security +"</td><td>" + checkStatus(Social_Security,ssnpattern) +"</td> </tr>";
            table += "<tr> <td>Address Line 1 </td><td>" + Address_line_1 +"</td> <td>" + checkStatus(Address_line_1) +"</td></tr>";
            table += "<tr> <td>Address Line 2 </td><td>" + Address_line_2 +"</td> <td>" + checkStatus(Address_line_2,null,false) +"</td></tr>";
            table += "<tr> <td>City </td><td>" + City +"</td> <td>" + checkStatus(City) +"</td></tr>";
            table += "<tr> <td>State </td><td>" + State +"</td> <td>" + checkStatus(State) +"</td></tr>";
            table += "<tr> <td>Zip-Code </td><td>" + shortZip +"</td> <td>" + checkStatus(Zipcode,zippattern) +"</td></tr>";
            table += "<tr> <td>Email Address </td><td>" + email +"</td> <td>" + checkStatus(email) +"</td></tr>";
            table += "<tr> <td>Phone 1 </td><td>" + Phone_number_1 +"</td> <td>" + checkStatus(Phone_number_1,phpattern) +"</td></tr>";
            table += "<tr> <td>Phone 2 </td><td>" + Phone_Number_2 +"</td> <td>" + checkStatus(Phone_Number_2,null,false) +"</td></tr>";
            table += "<tr> <td>Symptoms </td><td>" + Symptoms +"</td> <td>" + checkStatus(Symptoms) +"</td></tr>";
            table += "<tr> <td>Diseases </td><td>" + Diseases +"</td> <td>" + checkStatus(Diseases) +"</td></tr>";
            table += "<tr> <td>Language </td><td>" + Language +"</td> <td>" + checkStatus(Language) +"</td></tr>";
            table += "<tr> <td>Gender </td><td>" + Gender +"</td> <td>" + checkStatus(Gender) +"</td></tr>";
           table += "<tr> <td>Been Vaccinated </td><td>" + Vaccinated +"</td> <td>" + checkStatus(Vaccinated) +"</td></tr>";
           table += "<tr> <td>Have Insurance </td><td>" + Have_Insuarace +"</td> <td>" + checkStatus(Have_Insuarace) +"</td></tr>";
            table += "<tr> <td>Feeling Good </td><td>" + Feeling_good +"</td> <td>" + checkStatus(Feeling_good) +"</td></tr>";
            table += "<tr> <td>User Id </td><td>" + userid +"</td> <td>" + checkStatus(userid,uidpattern) +"</td></tr>";
            table += "<tr> <td>Password </td><td>" + password +"</td> <td>" + checkStatus(password,pwpattern) +"</td></tr>";
            table += "<tr> <td>Re-entered Password </td><td>" + re_password +"</td> <td>" + matchStatus +"</td></tr>";
            


            table += "</table>";

            document.getElementById("Valuetable").innerHTML=table;

        };

        

 // Checking for Short name    
function checkFname (){
    var x = document.getElementById("fstname").value.trim();
    if (x.length<2){
        document.getElementById("nameerr").innerHTML = "Name too short";
        
        return false;
}

        else{
            document.getElementById("nameerr").innerHTML = "";
            return true;
        }
        
    };
 // dynamic slider
    var slider = document.getElementById("slider");
    var output = document.getElementById("liveslider");

    output.innerHTML = slider.value;
    slider.oninput = function (){
        output.innerHTML= this.value;
    }
// Validation and restriction on User ID, password and confirm password
    function passwordValidation (){
        let userid = document.getElementById("uid").value.toLowerCase();
        document.getElementById("uid").value = userid;
        let firstname = document.getElementById("fstname").value.toLowerCase();
        let lastname = document.getElementById("ln").value.toLowerCase();
        let password = document.getElementById("pword").value;
        let confirmPassword = document.getElementById("Rpword").value;
        let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}/;

if (
    password.toLowerCase().includes(userid) ||
    password.toLowerCase().includes(firstname) ||
    password.toLowerCase().includes(lastname)
){
    document.getElementById("pvalidation").innerHTML =
    "Password cannot contain your user ID or name";
    return false;
}

    

        if (!pattern.test(password)){
          document.getElementById("pvalidation").innerHTML =  "Password must contain uppercase, lowercase, number, special character and be at least 8 characters.";
        return false; 
        }

        
        if(password !== confirmPassword){
            document.getElementById("pvalidation").innerHTML = "Please Enter the same password";
            return false
        }
        else{
             document.getElementById("pvalidation").innerHTML ="";
             return true;
        }
    };
// Date of birth Entry restriction
function checkDOB(dob){
    if (!dob) return "ERROR: Required";

    let today = new Date();
    let inputDate = new Date(dob);

if (inputDate > today){
        return "ERROR: Cannot be in the future";
    }
    let minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);

    if (inputDate < minDate){
        return "ERROR: More than 120 years ago";
    }
    return "PASS"
};

    let mxdates = new Date().toISOString().split("T")[0];
document.getElementById("dateob").setAttribute("max", mxdates);

let minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 120);

let minDOB = minDate.toISOString().split("T")[0];
document.getElementById("dateob").setAttribute("min", minDOB);



