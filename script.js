    var list=[];
    var listId="";
    //to get previous data stored in local storagre if-any
    getFromLocalstorage()

    //form-validation
     function validate()
     {    
         let name=document.getElementById("name");
         let birthday=document.getElementById("myDate");
         let place=document.getElementById("mySelect");
         var ele = document.getElementsByName('gender');
         var gender="";
         for(i = 0; i < ele.length; i++) { 
                  if(ele[i].checked) 
                  gender=ele[i].value; 
              } 
         let about=document.getElementById("about");
         let password=document.getElementById("password")
         if(NotEmpty(name.value,"UserName")&&alphabet(name.value))
         {
             if(NotEmpty(birthday.value,"Birthday"))
             {
                 if(countryselect(place.value)&&NotEmpty(place.value,"City"))
                 {
                     if(NotEmpty(gender,"Gender"))
                     {
                         if(NotEmpty(about.value,"About")&&alphaNumeric(about.value,"about"))
                         {
                             if(NotEmpty(password.value,"Password")&&alphaNumeric(password.value,"password")&&checkPassword(password.value,7,12))
                             {
                                //  var response = grecaptcha.getResponse();
                                //  if(response.length == 0) 
                                //  { 
                                //  document.getElementById("captcha-error").innerHTML="please verify you are humann!";
                                //  evt.preventDefault();
                                //  return false;
                                //  }
                                //  else
                                //  {
                                 document.getElementById("captcha-error").innerHTML=" ";
                                 const user={
                                     id:Math.random(),
                                     name:name.value,
                                     birthday:birthday.value,
                                     place:place.value,
                                     gender:gender,
                                     about:about.value,
                                     password:password.value
                                 };
                                 list.push(user)
                                 localStorage.setItem('LoggedInUser', JSON.stringify(user));
                                 addToLocalstorage(list); 
                                 alert("Form Submitted Successfully");
                                 location.reload();
                                //  }
                             }                                                      
                         }
                     }
                 }               
             }
         }
         return false;
     }
     
    //password-toggle
    function toggle() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    }

    //password validation
     function checkPassword(password,min,max)
     {
       var passwordLength = password.length;
       if (passwordLength >= max || passwordLength < min)
       {
         alert("Password  length be between "+min+" to "+max);
         return false;
       }
       return true;
     }

     //to check if any field is empty
     function NotEmpty(val,field)
     {
         if(val.length>0)
         {
            if(field==="UserName")
            {
                document.getElementById("name-error").innerHTML=" ";
                return true;
            }
            else if(field==="Birthday")
            {
               document.getElementById("birthday-error").innerHTML=" ";
               return true;
            }
            else if(field==="City")
            {
               document.getElementById("place-error").innerHTML=" ";
               return true;
            }   
            else if(field==="Gender")
            {
               document.getElementById("gender-error").innerHTML=" ";
               return true;
            }
            else if(field==="About")
            {
               document.getElementById("about-error").innerHTML=" ";
               return true;
            }
            else if(field==="Password")
            {
               document.getElementById("password-error").innerHTML=" ";
               return true;
            }
         }
         else
         {
             if(field==="UserName")
             {
                 document.getElementById("name-error").innerHTML="Username field Can Not Be Empty";
                 return false;
             }
             else if(field==="Birthday")
             {
                document.getElementById("birthday-error").innerHTML="Birthday field Can Not Be Empty";
                return false;
             }
             else if(field==="City")
             {
                document.getElementById("place-error").innerHTML="Place field Can Not Be Empty";
                return false;
             }   
             else if(field==="Gender")
             {
                document.getElementById("gender-error").innerHTML="Gender field Can Not Be Empty";
                return false;
             }
             else if(field==="About")
             {
                document.getElementById("about-error").innerHTML="About field Can Not Be Empty";
                return false;
             }
             else if(field==="Password")
             {
                document.getElementById("password-error").innerHTML="Password field Can Not Be Empty";
                return false;
             }          
         }
     }

     //dropdown selection
     function countryselect(ucountry)
     {
     if(ucountry == "Default")
     {
     document.getElementById("place-error").innerHTML="Select your country from the list";
     return false;
     }
     else
     {
     document.getElementById("place-error").innerHTML=" ";
     return true;
     }
     }

     //to check only alphabet are there
     function alphabet(name)
     { 
     var letters = /^[a-zA-Z ]*$/;;
     if(name.match(letters))
     {
     document.getElementById("name-error").innerHTML="";
     return true;
     }
     else
     {
     document.getElementById("name-error").innerHTML="Username must have alphabet characters only";
     return false;
     }
     }

     //to check alphabet and numbers are there
     function alphaNumeric(val,field)
     { 
     var letters = /^[a-z\d\-_\s]+$/i;
     if(val.match(letters))
     {
      return true;
     }
     else
     {
         if(field==="about")
         {
             document.getElementById("about-error").innerHTML="This Field must have alphanumeric characters only";
             return false;
         }
         else if(field==="password")
         {
             document.getElementById("password-error").innerHTML="This Field must have alphanumeric characters only";
             return false;
         }
      
     }
     }

     //add elements in row of the
     function display(list)
     {
         console.log(list)
         var x = document.getElementById("table").rows.length;
         if(x>1)
         {
         for(let i=0;i<x-1;i++)
         {
            document.getElementById("table").deleteRow(1)
         }
         }
         let table=document.getElementById("table");
         list.forEach(function(item) {
          var row   = table.insertRow(1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);
          var cell9 = row.insertCell(8);
          cell1.innerHTML = `${item.id}`;
          cell2.innerHTML = `${item.name}`;
          cell3.innerHTML = `${item.birthday}`;
          cell4.innerHTML = `${item.place}`;
          cell5.innerHTML = `${item.gender}`;
          cell6.innerHTML = `${item.about}`;
          cell7.innerHTML = `${item.password}`;
          if(JSON.parse(localStorage.getItem("LoggedInUser")).id==item.id)
          {
            console.log("if-logged-in-user")
            cell8.innerHTML = `<i class="fa fa-trash-o delete1-button"></i>`;
          }
          else
          cell8.innerHTML = `<i class="fa fa-trash-o delete-button" onclick="del(${item.id})"></i>`;
          cell9.innerHTML = `<i class="fa fa-edit delete-button" onclick="edit(${item.id},'${item.name}','${item.birthday}','${item.about}','${item.place}','${item.gender}')" data-toggle="modal" data-target="#exampleModal"></i>`;
      });
     }
     function del(id)
     {
         let res=confirm("Do You Want To Delete?");
         if(res)
         {
         list = list.filter(function(item) {
           return item.id != id;
         });
         console.log(list);
         addToLocalstorage(list);
         location.reload();
         }
         console.log(id)
     }
     function edit(id,name,bday,about,place,gender)
     {
        // listId=id;
        console.log(id)
        document.getElementById("id").value = id;
        document.getElementById("name").value = name;
        document.getElementById("mdate").value = bday;
        if(place==="chandigarh")
        {
            document.getElementById("mplace").selectedIndex = "1"
        }
        else if(place==="panchkula")
        {
            document.getElementById("mplace").selectedIndex = "2"
        }
        else if(place==="mohali")
        {
            document.getElementById("mplace").selectedIndex = "3"
        }
        if(gender==="male")
        {
            document.getElementById("male").checked = true;
        }
        else if(gender==="female")
        {
            document.getElementById("female").checked = true;
        }
        else if(gender==="others")
        {
            document.getElementById("others").checked = true;
        }
        document.getElementById("mabout").value = about;
     }     

      //add to local storage
      function addToLocalstorage(list) {
        localStorage.setItem('user', JSON.stringify(list));
        display(list);
      }
    
      //get data from local storage
      function getFromLocalstorage() {
        const getList = localStorage.getItem('user');
        if (getList) {
          list = JSON.parse(getList);
          display(list)
        }
      }

      function onEdit(id,name,bday,place,about)
      {
        let ele = document.getElementsByName('mgender');
        let gender="";
        for(i = 0; i < ele.length; i++) { 
                 if(ele[i].checked) 
                 gender=ele[i].value; 
             } 
          for (var i in list) {
            if (list[i].id == id) {
               list[i].name = name;
               list[i].birthday = bday;
               list[i].place = place;
               list[i].gender = gender;
               list[i].about = about;
               break;
            }
          }
          localStorage.removeItem("user");
          addToLocalstorage(list);
          location.reload();
      }

      function logOut()
      {
          localStorage.removeItem("LoggedInUser");
      }

      var myVar;            
      function myFunction() {
        myVar = setTimeout(showPage, 3000);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("table").style.display = "table";
        document.getElementById("logOutBtn").style.display = "block";
        document.getElementById("heading").style.display = "block"; 
        document.getElementById("buttons").style.display = "block";             
      }

        var $table = document.getElementById("table"),
        $n = 2,
        rowCount = $table.rows.length,
        $firstRow = $table.rows[0].firstElementChild.tagName,
        $hasHead = ($firstRow === "TH"),
        $tr = [],
        $i,$ii,$j = ($hasHead)?1:0,
        $th = ($hasHead?$table.rows[(0)].outerHTML:"");
        var $pageCount;
        if(rowCount%2==0)
        $pageCount = Math.ceil(rowCount / $n);
        else
        $pageCount = Math.floor(rowCount / $n);
        
        if ($pageCount > 1) {
            for ($i = $j,$ii = 0; $i < rowCount; $i++, $ii++)
                $tr[$ii] = $table.rows[$i].outerHTML;
            $table.insertAdjacentHTML("afterend","<div id='buttons'></div");
            sort(1);
        }
        
        function sort($p) {
            var $rows = $th,$s = (($n * $p)-$n);
            for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
                $rows += $tr[$i];
            $table.innerHTML = $rows;
            document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
            document.getElementById("id"+$p).setAttribute("class","active");
        }

        function pageButtons($pCount,$cur) {
            var	$prevDis = ($cur == 1)?"disabled":"",
                $nextDis = ($cur == $pCount)?"disabled":"",
        
                $buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
            for ($i=1; $i<=$pCount;$i++)
                $buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
            $buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
            return $buttons;
        }

