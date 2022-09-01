<?php

/*
Plugin Name: Advanced Custom Fields: JSON
Plugin URI: ttps://rozklad.dev
Description: JSON field for Advanced Custom Fields.
Version: 0.4.0
Author: rozklad
Author URI: ttps://rozklad.dev
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

// exit if accessed directly
if( ! defined( 'ABSPATH' ) ) exit;


add_action('plugins_loaded', function () {
    if (file_exists(__DIR__ . '/vendor/autoload.php')) {
        include __DIR__ . '/vendor/autoload.php';
    }
});

add_action('init', 'acf_field_type_json', 1);

function acf_field_type_json() {
	new AcfFieldJson\AcfPluginJson();
}
