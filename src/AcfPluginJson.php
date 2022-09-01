<?php

namespace AcfFieldTypeJson;

class AcfPluginJson {

	/*
    *  __construct
	*
	*  This function will setup the class functionality
	*
	*  @type	function
	*  @date	17/02/2016
	*  @since	0.3.1
	*
	*  @param	n/a
	*  @return	n/a
	*/

	function __construct() {

		// set text domain
		// https://codex.wordpress.org/Function_Reference/load_plugin_textdomain
		load_plugin_textdomain( 'acf-json', false, plugin_basename( dirname( __FILE__ ) ) . '/lang' );


		// include field
		add_action('acf/include_field_types', 	array($this, 'include_field_types')); // v5
		add_action('acf/register_fields', 		array($this, 'include_field_types')); // v4

	}


	/**
	 *  include_field_types
	 *
	 *  This function will include the field type class
	 *
	 *  @type	function
	 *  @date	17/02/2016
	 *  @since	0.3.1
	 *
	 *  @param	$version (int) major ACF version. Defaults to 4
	 *  @return	void
	*/

	function include_field_types( int $version = 4 ): void {

		// include
		include_once(__DIR__ . '/../fields/acf-json-' . self::version($version) . '.php');

	}

    public static function version( int $version ): string {
        return 'v' . $version;
    }

}

