function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_technical(data.technical);
});
var div2=document.getElementById("child2");
function fun_career(career_obj){
  var heading1=document.createElement("h2")
  heading1.textContent="Career Objective";
  div2.appendChild(heading1);

  var hr=document.createElement("hr");
  heading1.appendChild(hr);

  var info=document.createElement("p");
  info.classList.add("largeFont");
  div2.appendChild(info);
  info.textContent=career_obj.info;

}
function fun_education(edu)
{
  var heading=document.createElement("h2")
  heading.textContent="Educational Qualification";
  div2.appendChild(heading);

  var hr=document.createElement("hr");
  heading.appendChild(hr);

  var list=document.createElement("ul");
  div2.appendChild(list);
   for(var i=0; i<edu.length; i++)
   {
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);

    var listItem=document.createElement("li");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);

    var listItem=document.createElement("li");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
   }
 }
  function fun_achievements(ach)
  {
    var heading3=document.createElement("h2")
    heading3.textContent="Achievements";
    div2.appendChild(heading3);

    var hr=document.createElement("hr");
    heading3.appendChild(hr);

    var list=document.createElement("ul");
    div2.appendChild(list);
     for(var i=0; i<ach.length; i++)
     {
      var listItem=document.createElement("li");
      listItem.innerHTML=ach[i].name;
      list.appendChild(listItem);
     }
   }
   function fun_technical(tech)
   {
    var heading4=document.createElement("h2")
    heading4.textContent="Technical Skills";
    div2.appendChild(heading4);

    var hr=document.createElement("hr");
    heading4.appendChild(hr);

    var tr="";
    var table=document.createElement("table");

    //table.width="500";
    //table.height="500";


    div2.appendChild(table);
    for(var i=0;i<tech.length;i++)
    {
      tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";


    }
      table.innerHTML=tr;
      table.border="1";
}
