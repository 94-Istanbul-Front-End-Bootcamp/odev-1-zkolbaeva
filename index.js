const myname = "Zhanara Kolbaeva";
const age = 24;
const linkedIn = "https://www.linkedin.com/in/zhanara-kolbaeva/";
const gitHub = "https://github.com/zkolbaeva";


document.getElementsByTagName("a")[0].setAttribute("href", linkedIn);
document.getElementsByTagName("a")[1].setAttribute("href", gitHub);

function myFunction() {
    let hidden = false;
    hidden = !hidden;
    if(hidden) {
        document.getElementById('btn').style.visibility = 'hidden';
        document.getElementById("nameSurname").innerHTML=myname;
        document.getElementById("age").innerHTML=age;
    } else {
        document.getElementById('btn').style.visibility = 'visible';
    }
}

