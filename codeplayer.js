
          function updateOutput() {

            $('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $("#css").val() + "</style></head><body>" + $("#html").val() + "</body></html>");

            document.getElementById("output").contentWindow.eval($("#js").val()); // Running JS inside iframe (security issues for real sites.)

          }
      
          $("#accordion").accordion({

                collapsible: true

          });

          updateOutput();

          $("textarea").on('change keyup paste', function() {

                updateOutput();

          });