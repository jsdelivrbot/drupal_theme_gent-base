<div id="<?php print $block_html_id; ?>" class="l-column island island--gamma <?php print $classes; ?>"<?php print $attributes; ?>>
<?php print render($title_prefix); ?>
<?php if ($block->subject): ?>
  <h3<?php print $title_attributes; ?>><?php print $block->subject ?></h3>
<?php endif;?>
  <?php print render($title_suffix); ?>

  <?php print $content ?>
</div>
