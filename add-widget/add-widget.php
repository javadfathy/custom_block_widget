<?php
/**
 * Plugin Name: add widget
 */

function imanoor_custom_block_widget()
{
    wp_enqueue_script('imanoor_custom_block',plugin_dir_url(__FILE__).'imanoor_block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
}
add_action('enqueue_block_editor_assets','imanoor_custom_block_widget')
?>

