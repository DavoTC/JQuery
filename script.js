$(document).ready(function(){
    $('#boton').click(function(){
        var Agregar = $('input[name=itemDeLista]').val();
        $('.lista').append('<div class="item">'+Agregar+'</div>');
    });
     
    $(document).on('click', '.item', function(){
        $(this).remove();
    });
});
