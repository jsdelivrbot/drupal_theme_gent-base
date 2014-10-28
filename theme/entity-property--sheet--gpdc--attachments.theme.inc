<?php
/**
 * @file
 * GPDC sheet files theming.
 */

/**
 * Overrides theme_entity_property__sheet__gpdc__attachments().
 */
function gent_base_entity_property__sheet__gpdc__attachments(&$variables) {
  $output = '';

  if ($variables['property_name'] == 'forms') {
    foreach ($variables['content'] as $content) {
      $output .= '<p' . $variables['attributes'] . '>' . $content . '</p>' . "\n";
    }
  }
  else {
    $output = '<div' . $variables['attributes'] . '>' . "\n";
    $output .= '<h3><i class="icon-clip"></i>' . $variables['label'] . '</h3>';
    $output .= theme('file_formatter_table', $variables);
    $output .= '</div>' . "\n";
  }

  return $output;
}