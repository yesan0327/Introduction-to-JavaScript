var secretnumber=3;
var flag=1;
while (flag){
    var ans = Number(prompt("Input ur number"));
if (ans === secretnumber) {
    alert("YES!");
    console.log("Yes!");
    flag=0;
}
else if (ans > secretnumber) {
    alert("Too High");
}
else {
    alert("Too Low");
}
}