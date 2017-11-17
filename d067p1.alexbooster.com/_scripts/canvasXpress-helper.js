      var jumpTo = function(url) {
        parent.location=url
      }

      var showSourceCode = function(id) {
        var c = document.getElementById(id)
        if (c) {
          var d = c.style.display
          if (d == 'none') {
            c.style.display = 'block';
          } else {
            c.style.display = 'none';
          }
        }
      }

      var showCode = function(cb, t) {
        var cx = CanvasXpress.references
          for (var i = 0; i < CanvasXpress.references.length; i++) {
            if (CanvasXpress.references[i].target == t) {
              var c = CanvasXpress.references[i];
              if(cb.checked) {
                c.showCode = true;
                c.draw()
              } else {
                c.showCode = false;
                c.hideCodeDiv()
              }
            }
          }
      }

      var showData = function(cb, t) {
        var cx = CanvasXpress.references
          for (var i = 0; i < CanvasXpress.references.length; i++) {
            if (CanvasXpress.references[i].target == t) {
              var c = CanvasXpress.references[i];
              if(cb.checked) {
                c.showDataTable = true;
              } else {
                c.showDataTable = false;
              }
              c.draw()
            }
          }
      }
