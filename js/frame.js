var Frame =  f = {
    update: function(){
        $(".btn").addClass("preset");
        $(".btn.submit").removeClass("preset");
        $(".btn.danger").removeClass("preset");
        $(".btn.info").removeClass("preset");
        $(".btn.success").removeClass("preset");
    }
}

$("document").ready(function(){
    f.update();
}).change(function(){
    f.update();
});