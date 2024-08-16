$(document).ready(function(){
    $('#data-form').click(function(e) {
        var data = $('#data-form').serialize();
        // debugger;
          e.preventDefault();
    $.ajax({
        type: 'POST',
        url: `/Bug`,
        method: 'Post',
        data: data,
        success: function(data){
           alert('bug added')
            window.location.reload()
        },
        error: function(){
            console.log('No data');
        }
    });

});	
    $(function(){
        // Basic Filtable usage - pass in a div with the filters and the plugin will handle it
        $('#data').filtable({ controlPanel: $('.table-filters') });
    });

});