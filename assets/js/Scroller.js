$( document ).ready(function() {
    //window.alert("sometext");
    let init_scroll = window.scrollY;
    var messageElement = document.getElementById("SIDEBARHEIGHT");

    let basemarg = 80;
    let marginval = "margin-top:"
    let concat_end = "px;"


    if (init_scroll  <= 33){

        let init_minusscroll = (112 - init_scroll).toString();

        messageElement.style=(marginval + init_minusscroll + concat_end);
    }

    if (init_scroll != 0){

        messageElement.style="margin-top:80px;";
    }


    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        if (scroll  <= 33){

            let minusscroll = (112 - scroll).toString();

            messageElement.style=(marginval + minusscroll + concat_end);
        }


        if (scroll > 33){
            //window.alert(scroll)
            messageElement.style="margin-top:80px;";
        }

    });



});

