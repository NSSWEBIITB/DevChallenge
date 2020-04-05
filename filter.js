sels = document.getElementsByTagName('select');
 for(i=0; i<sels.length; i++) 
 {
  sels[i].addEventListener('change', function() {
     selectionID = this.id;
     if(selectionID === "filter")
     {
         var selected = document.getElementById("filter").value
         var cur_items = document.getElementById('data-item').getElementsByClassName('span');
         
         $.getJSON("data.json",function(data){
            $.each(data, function(key,value){
                if( value.id === cur_items[i].innerText){
                    for(var j = 0; j < (languages.length+2); j++)
                    {
                        for (x in value.languages) {
                            if (value.languages[x] == selected) {
                                document.getElementById("data-item").style.display = "block";
                            }
                        }
                        if(selected == "All" || value.role == selected || value.level == selected )
                        {
                            document.getElementById("data-item").style.display = "block";
                        }
                        else
                        {
                            document.getElementById("data-item").style.display = "none"; 
                        }
                    }
                }
            });
        });
     }
  }, false);}