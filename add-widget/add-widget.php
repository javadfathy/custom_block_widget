<?php
/**
 * Plugin Name: add widget
 * Plugin URI: https://github.com/javadfathy/custom_block_widget
 * Description: This plugin for create custom widget in post
 * Author: Javad Fathi
 * Version: 0.1
 * Author URI: https://github.com/javadfathy/
 */

function brandName_custom_block_widget()
{
    wp_enqueue_script('brandName_custom_block',plugin_dir_url(__FILE__).'brandName_block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);

}

add_action('enqueue_block_editor_assets','brandName_custom_block_widget',9);


function brandName_custom_block_widget2()
{
    wp_enqueue_script('brandName_custom_block_quran',plugin_dir_url(__FILE__).'brandName_block_quran.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);

}

add_action('enqueue_block_editor_assets','brandName_custom_block_widget2');






?>

