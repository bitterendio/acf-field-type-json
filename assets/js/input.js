(function($) {
  function initialize_field($el) {
    var options = {
      mode: "tree",
      modes: ["code", "form", "text", "tree", "view"], // allowed modes
      onError: function(err) {
        alert(err.toString());
      },
      onModeChange: function(newMode, oldMode) {
        console.log("Mode switched from", oldMode, "to", newMode);
      },
      onChange: function() {
        try {
          var json = editor.get();
        } catch (e) {
          console.warn(
            "Input is not valid JSON - not updating the underlying field"
          );
          return;
        }

        // Update data in hidden field
        $el
          .find('input[name="acf[' + $el.data("key") + ']"]')
          .val(JSON.stringify(json));
      }
    };
    var editor = new JSONEditor($el[0], options);

    // set json
    var json = $el.find("[data-acf-value]").data("acf-value");
    editor.set(json);
  }

  if (typeof acf.add_action !== "undefined") {
    /*
		*  ready append (ACF5)
		*
		*  These are 2 events which are fired during the page load
		*  ready = on page load similar to $(document).ready()
		*  append = on new DOM elements appended via repeater field
		*
		*  @type	event
		*  @date	20/07/13
		*
		*  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
		*  @return	n/a
		*/

    acf.add_action("ready append", function($el) {
      // search $el for fields of type 'json'
      acf.get_fields({ type: "json" }, $el).each(function() {
        initialize_field($(this));
      });
    });
  } else {
    /*
		*  acf/setup_fields (ACF4)
		*
		*  This event is triggered when ACF adds any new elements to the DOM.
		*
		*  @type	function
		*  @since	1.0.0
		*  @date	01/01/12
		*
		*  @param	event		e: an event object. This can be ignored
		*  @param	Element		postbox: An element which contains the new HTML
		*
		*  @return	n/a
		*/

    $(document).on("acf/setup_fields", function(e, postbox) {
      $(postbox)
        .find('.field[data-field_type="json"]')
        .each(function() {
          initialize_field($(this));
        });
    });
  }
})(jQuery);
