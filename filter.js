sels = document.getElementsByTagName('select');
 for(i=0; i<sels.length; i++) 
 {
  sels[i].addEventListener('change', function() {
     selectionID = this.id;
    //  Profficiency Filter
     if(selectionID === "filter1")
     {
         var selected = document.getElementById("filter1").value
         var cur_items = document.getElementById('data-item').getElementsByClassName('span');
         
         $.getJSON("data.json",function(data){
            $.each(data, function(key,value){
                if( value.id === cur_items[i].innerText){
                    for(var j = 0; j < 2; j++)
                    {
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

     //Language Filter
     if(selectionID === "filter2")
     {
         var selected = document.getElementById("filter2").value
         var cur_items = document.getElementById('data-item').getElementsByClassName('span');
         
         $.getJSON("data.json",function(data){
            $.each(data, function(key,value){
                if( value.id === cur_items[i].innerText){
                    for(var j = 0; j < languages.length; j++)
                    {
                        for (x in value.languages) {
                            if (selected == "All" || value.languages[x] == selected) {
                                document.getElementById("data-item").style.display = "block";
                            }
                            else
                            {
                                document.getElementById("data-item").style.display = "none"; 
                            }
                        }
                    }
                }
            });
        });
     }

     //Tools Filter
     if(selectionID === "filter3")
     {
         var selected = document.getElementById("filter3").value
         var cur_items = document.getElementById('data-item').getElementsByClassName('span');
         
         $.getJSON("data.json",function(data){
            $.each(data, function(key,value){
                if( value.id === cur_items[i].innerText){
                    for(var j = 0; j < tools.length; j++)
                    {
                        for (x in value.tools) {
                            if (selected == "All" || value.tools[x] == selected) {
                                document.getElementById("data-item").style.display = "block";
                            }
                            else
                            {
                                document.getElementById("data-item").style.display = "none"; 
                            }
                        }
                    }
                }
            });
        });
     }
  }, false);}