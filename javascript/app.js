$('span').on('click', function(){
    $('span').removeClass('selected');
    $(this).addClass('selected');
});


window.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelectorAll("[data-id]"),
        block = document.querySelectorAll(".toggle");
    [].forEach.call(btn, function(item, k) {
        item.dataset.text = item.textContent;
        var id = item.dataset.id;
        item.addEventListener("click", function(event) {
            event.preventDefault();
            [].forEach.call(block, function(el, i) {
                if (el.id == id) {
                  el.classList.toggle("hide");
                  el.classList.contains("hide") && block[0].classList.remove("hide")
                }
                else el.classList.add("hide");
            });
            [].forEach.call(btn, function(item, i) {
                var id = item.dataset.id;
                var el = document.getElementById(id)
                item.textContent = el.classList.contains("hide") ?  item.dataset.text : "Панель" ;
            })

        })
    })
});