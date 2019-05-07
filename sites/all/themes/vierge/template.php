<?php

/**
 * Implements template_preprocess_html().
 */
function vierge_preprocess_html(&$variables) {

	drupal_add_css('//fonts.googleapis.com/css?family=Montserrat:300,400,600,700', array('group' => CSS_THEME));

}

/**
 * Implements template_preprocess_page.
 */
function vierge_preprocess_page(&$variables) {
}

/**
 * Implements template_preprocess_node.
 */
function vierge_preprocess_node(&$variables) {
}