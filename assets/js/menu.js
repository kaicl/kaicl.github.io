


var flag = false;
$("#cll").on("click", function () {
    if (flag == true) {
        $(".menucontent").removeClass("menucontent_opened");
        $("#navbarSupportedContent").removeClass("menu_opened");
        $("#navbarSupportedContent").css("margin-left","-128px");

        flag = false;
    }
    else {
        $(".menucontent").addClass("menucontent_opened");
        $("#navbarSupportedContent").addClass("menu_opened");
        $("#navbarSupportedContent").css("margin-left","0px");
        $("#menu").addClass("m_opened");
        flag = true;
    }
});