const completematrix=()=>
{
    var total=0;
    for(indexofrow=0;indexofrow<3;indexofrow++){
      var colomntotal=0;
      for(indexofcolomn=0;indexofcolomn<3;indexofcolomn++)
        {
          let box_value=document.getElementById(`box${indexofrow}${indexofcolomn}`).value;
          colomntotal += (parseInt(box_value));
             if(colomntotal==15)
               total++ 
        }
      }
      if(total==3)
        alert("👏 you won 🎁");
}
const checkmatrix=(a,b)=>{
    let row=0,coloum=0;
    for(i=0;i<3;i++)
      {
          var p=document.getElementById(`box${a}${i}`).value;
          if(p!=""){
               row+=(parseInt(p));
               DuplicateMatrix(parseInt(p),a,i);
          }
          var q=document.getElementById(`box${i}${b}`).value;
          if(q!=""){
              DuplicateMatrix(parseInt(q),i,b);
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
    completematrix();
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
    else
      {
        for(var i=0;i<=3;i++)
      document.getElementById(`box${a}${i}`).style.color="red";
      }
    if(colomn==15){
      for(var i=0;i<=3;i++)
        document.getElementById(`box${i}${b}`).style.color="green";
    }
    else{
      for(var i=0;i<=3;i++)
      document.getElementById(`box${i}${b}`).style.color="red";
    } 
}
function DuplicateMatrix(inputvalue,iIndex,jIndex){
    for(k=0;k<3;k++) 
    {
      for(l=0;l<3;l++){
         if(k!==iIndex&&l!==jIndex){
            const checkvalue=document.getElementById(`box${k}${l}`).value;
           if(parseInt(checkvalue)==inputvalue){
             console.log("iinedx=" + iIndex +",jindex=" + jIndex + ",k=" + k + ",j=" + l)
             console.log("duplivcate");
             alert(" 👏Duplicate values not allowed 👏");
             document.getElementById(`box${k}${l}`).value="";
        }   
       }
      }
    } 
}
const btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",()=>{
    document.getElementsByClassName("non-solution")[0].style.display="none";
    document.getElementsByClassName("solution")[0].style.display="block";
})