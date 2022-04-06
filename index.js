const checkmatrix=(a,b)=>{
    let row=0,coloum=0;
    for(i=0;i<3;i++)
      {
          var p=document.getElementById(`box${a}${i}`).value;
          if(p!=""){
              
               row+=(parseInt(p));
              DuplicateMatrix(p,a,i);
          }
          var q=document.getElementById(`box${i}${b}`).value;
          if(q!=""){
              DuplicateMatrix(q,i,b);
              coloum+=(parseInt(q));
          }     
      }
       if(row>15 )
           alert(`😮Ahh! your sum is greater than 15 in ${++a} row😮`);
       else if(coloum>15)
           alert(`😮Ahh! your sum is greater than 15 in ${b+1} colomn😮`);
      analysisMatrix(a,b,row,coloum);
}
const input_box=document.querySelector("table");
input_box.addEventListener("keyup",(e)=>{
    if((e.key>=0&&e.key<=9)|| e.key=="Backspace"||e.key=="Tab")
      valueUpdate(e.target.id);
    else
      alert("please press key between 0-9 😊")
});
function valueUpdate(targetValue){
    const box_id=(targetValue)
    const input_value=document.getElementById(`${box_id}`).value;
    if(input_value>15)
          document.getElementById(`${box_id}`).value=15;
    const a= box_id.split("");
    checkmatrix(a[3],a[4]);
}
function analysisMatrix(a,b,row,colomn){
    if(row==15)
      for(var i=0;i<=3;i++)
        document.getElementById(`box${a}${i}`).style.color="green";
    if(colomn==15)
      for(var i=0;i<=3;i++)
        document.getElementById(`box${i}${b}`).style.color="green";
}
function DuplicateMatrix(value,iIndex,jIndex){
    for(i=0;i<3;i++) 
      for(j=0;j<3;j++)
       if(i!=iIndex&&j!=jIndex){
           if(document.getElementById(`box${i}${j}`).value==value){
             alert(" 👏Duplicate values not allowed 👏");
             document.getElementById(`box${iIndex}${jIndex}`).value="";
        }   
       }  
}
