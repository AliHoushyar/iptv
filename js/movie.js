// movie.js
$(document).ready(function () {
  const $buttons = $('.MIBTN');
  const $headerBtns = $('.bottomContHeader .MIBTN'); // header area MIBTN count (dynamic)
  const headerCount = $headerBtns.length;
  const total = $buttons.length;

  // Make items focusable / accessible (if you don't want DOM edits)
  $buttons.each(function () {
    const $t = $(this);
    if (!$t.attr('role')) $t.attr('role', 'button');
    // keep them out of tab order by default but programmatically focusable
    $t.attr('tabindex', -1);
  });

  // helper: compute columns in genre area by measuring container / item width
  function computeCols() {
    const $genreContainer = $('.movieGenreContainer');
    const $one = $genreContainer.find('.MIBTN').first();
    if (!$one.length) return 4;
    const contW = Math.max(1, $genreContainer.width());
    const itemW = Math.max(1, $one.outerWidth(true));
    return Math.max(1, Math.round(contW / itemW));
  }

  // centralized setter for active
  let currentIndex = headerCount; // start at first genre (matches your original)
  function setActive(index, doScroll = true) {
    index = Math.max(0, Math.min(index, total - 1));
    $buttons.removeClass('active').attr('tabindex', -1);
    currentIndex = index;
    const $btn = $buttons.eq(currentIndex);
    $btn.addClass('active').attr('tabindex', 0).focus();
    if (doScroll && $btn.length) {
      // scroll so the active element is centered in viewport
      $btn[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }

  // initial
  setActive(currentIndex, true);

  // keyboard navigation
  $(document).on('keydown', function (event) {
    const key = event.key;
    const cols = computeCols();

    // only intercept navigation keys to avoid breaking other shortcuts
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(key)) {
      return;
    }
    // prevent page default scrolling for arrow keys/navigation here
    event.preventDefault();

    if (key === 'ArrowDown') {
      if (currentIndex < headerCount) {
        // from header -> first genre
        setActive(headerCount);
        return;
      }
      // move down a row
      let ni = currentIndex + cols;
      if (ni >= total) ni = total - 1;
      setActive(ni);
    } else if (key === 'ArrowUp') {
      if (currentIndex > headerCount && currentIndex <= headerCount + cols - 1) {
        // from first genre row -> go to first header button (index 0)
        setActive(0);
        return;
      }
      if (currentIndex < headerCount) {
        // already in header — do nothing (or you could move focus between header buttons)
        return;
      }
      // move up a row
      let ni = currentIndex - cols;
      if (ni < headerCount) {
        setActive(0);
      } else {
        setActive(ni);
      }
    } else if (key === 'ArrowRight') {
      if (currentIndex < headerCount) {
        // move left across header row
        setActive(Math.max(0, currentIndex - 1));
      } else {
        // move left within current genre row, do not wrap to previous row
        const rowStart = headerCount + Math.floor((currentIndex - headerCount) / cols) * cols;
        setActive(Math.max(rowStart, currentIndex - 1));
      }
    } else if (key === 'ArrowLeft') {
      if (currentIndex < headerCount) {
        // move right across header row
        setActive(Math.min(headerCount - 1, currentIndex + 1));
      } else {
        // move right within row, don't pass row end
        const rowStart = headerCount + Math.floor((currentIndex - headerCount) / cols) * cols;
        const rowEnd = Math.min(rowStart + cols - 1, total - 1);
        setActive(Math.min(rowEnd, currentIndex + 1));
      }
    } else if (key === 'Enter' || key === ' ') {
      // trigger click on current active
      $buttons.eq(currentIndex).trigger('click');
    }
  });

  // clicks (kept your behavior)
  $(document).on('click', '.movieSingleGenre.MIBTN', function () {
    alert($(this).data('cat'));
  });

  $(document).on('click', '.bottomContHeaderSingleBtn', function () {
    window.location = 'index.html';
  });

  // optional: if window resizes, you might want to re-center the active item
  $(window).on('resize', function () {
    // re-scroll active into view so layout changes keep it visible
    $buttons.eq(currentIndex)[0]?.scrollIntoView?.({ behavior: 'auto', block: 'center', inline: 'center' });
  });
});
