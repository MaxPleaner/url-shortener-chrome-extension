$(function() {
    $('#url-form').on("submit", function (event) {
        event.preventDefault();
        var base_url = "http://maxp-redirector.herokuapp.com/api/urls"
        var input_url = $('#url-input').val()

        $.ajax({
          type: "POST",
          url: base_url,
          data: {
            url: {
              urlInput: input_url
            }
          },
          success: function (data, status) {
              short_url = "http://maxp-redirector.herokuapp.com/alias/" + data['alias']
              results_link = '<a href="' + short_url + '">' + short_url + '</a>'
              $('body').append($(results_link));
          },
          dataType: 'json'
        });

    })
})
