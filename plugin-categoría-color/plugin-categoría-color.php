<?php
/*
Plugin Name: Plugin Categoría Color
Description: Al cargar el bloque en las entradas o posts, debe cambiar el estilo o clase del contenedor del
título, dependiendo de la categoría seleccionada.
Version: 1.0
Author: Hilario Bautista Miguel
*/

// Evita el acceso directo al archivo
if (!defined('ABSPATH')) {
    exit;
}

function plugin_categoria_color_register_block() {
    wp_register_script(
        'plugin-categoria-color-script',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-editor')
    );

    register_block_type('plugin-categoria-color/bloque', array(
        'editor_script' => 'plugin-categoria-color-script',
    ));
}

add_action('init', 'plugin_categoria_color_register_block');