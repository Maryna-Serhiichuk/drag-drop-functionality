$( function() {
    var $gallery = $( "#gallery" ),
      $trash = $( "#trash" );
 
    $( "div", $gallery ).draggable({});
    $trash.droppable({
      accept: "#gallery > div",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
    $trash.droppable({
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
    function deleteImage( $item ) {
      $item.fadeOut(function() {
          $( "<ul class='image-animation animation'/>" ).appendTo( $trash ).fadeOut(500);
      });
    }
    $( "dl.gallery > div" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-trash" ) ) {
        deleteImage( $item );
      }
      return false;
    });
  } );