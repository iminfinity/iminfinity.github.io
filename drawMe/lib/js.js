function drawMyFace(data){
    $picTable = $("table#pic-table") //jquery that gets the table with id="pic-table"

    for(let i = 1; i <= 12; i++){
        let cell = "<th>" + "" + "</th>";
        for(let j = 1; j <= 15; j++){
            cell = cell + "<td id=\"" + i + "_" + j + "\" >"+ "" +" </td>";
        }

        let row = "<tr>" + cell + "</tr>";
        $picTable.append(row);

    }

    data.forEach(function (value,i) {
        value.forEach(function (pic, j){
            I = i + 1;
            J = j + 1;
            let id = I + "_" + J;
            let color = "white";
       
            $td = $("td#" + id);
            pic = "url("+ pic +")";
            $td.css("background-color",color);
            $td.on("mouseover", function(event){
                $(event.target).css("background-image", pic);
            });

            $td.on("mouseout", function(event){
              
            });
        });
    });

}


window.onload = function() {
    console.log("hello");
    data = new Array(12)
    mod12 = 180;
    for(let i = 0; i < data.length; i++){
        data[i] = ["","","","","","","","","","","","","","",""];
    }
   console.log(data);
    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 15; j++){
            data[i][j] = "mypic/" + (mod12).toString() + ".jpg";
            mod12--;
        }
    }
    
    drawMyFace(data);

    
}

