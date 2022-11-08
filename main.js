name_of_student_array= [];
function Submit()
{
var name_1 = document.getElementById("Name_1").value;
var name_2 = document.getElementById("Name_2").value;
var name_3 = document.getElementById("Name_3").value;
var name_4 = document.getElementById("Name_4").value;

name_of_student_array.push(name_1);
name_of_student_array.push(name_2);
name_of_student_array.push(name_3);
name_of_student_array.push(name_4);

console.log(name_of_student_array);

document.getElementById("display_name").innerHTML=name_of_the_student_array;
document.getElementById("Submit_button").style.display="none";
document.getElementById("Sorting_button").style.display="inline_block";

}

function Sorting()
{
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML = name_of_student_array;
}