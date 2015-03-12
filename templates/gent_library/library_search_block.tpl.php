<div class="library-search-box island island--zeta">
  <div class="island__body clearfix">
    <h2><?php print t('Search in the catalog') ?></h2>
    <p><?php print t('Looking for books, films, music, the library of Ghent has something for everyone.') ?></p>
    <form accept-charset="UTF-8" id="library-search" method="get" action="<?php print $url ?>">
      <input type="text" class="prefix--medium" maxlength="60" size="60" value="" name="<?php print $query_argument ?>" id="location-name" placeholder="<?php print t('Enter a searchterm') ?>">
      <input type="submit" class="btn btn--medium btn--alpha postfix--medium" value="<?php print t('Search') ?>" id="edit-submit">
    </form>
  </div>
</div>