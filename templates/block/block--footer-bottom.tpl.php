<div id="<?php print $block_html_id; ?>" class="l-column js-height island island--gamma <?php print $classes; ?>">

<?php if ($block->subject): ?>
  <h3><?php print $block->subject ?></h3>
<?php endif;?>

  <?php print $content ?>
</div>