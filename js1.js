function myFunction() {
  var s = document.getElementById("myText").value;
  var c = s / 9.5;
  var h1 = document.createElement("h2");
  var textAnswer = document.createTextNode(c);
  h1.setAttribute("id", "cgpa1");
  h1.appendChild(textAnswer);
  document.getElementById("cgpa").appendChild(h1);
}
function myFunction1() {
  var s = document.getElementById("myText1").value;
  var c = s * 9.5;
  var h2 = document.createElement("h2");
  var textAns = document.createTextNode(c);
  h2.setAttribute("id", "per");
  h2.appendChild(textAns);
  document.getElementById("percentage").appendChild(h2);

}
function reset(){
  var p=document.getElementById("cgpa1");
  p.remove();
}
function reset1(){
  var p=document.getElementById("per");
  p.remove();
}