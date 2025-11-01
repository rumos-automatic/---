/**
 * 付録ナビゲーション機能
 * 付録A～H間のナビゲーション、現在位置のハイライト
 */

/**
 * ナビゲーションの初期化
 */
function initAppendixNavigation() {
  const currentPage = getCurrentPage();
  highlightCurrentPage(currentPage);
}

/**
 * 現在のページを取得
 */
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1);
  return filename;
}

/**
 * 現在のページをハイライト
 */
function highlightCurrentPage(currentPage) {
  const navLinks = document.querySelectorAll('.appendix-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || href.endsWith(currentPage)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * スムーススクロール
 */
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') {
        return;
      }

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // URLを更新（履歴に追加）
        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * 「トップへ戻る」ボタン
 */
function initScrollToTop() {
  const scrollTopButton = document.getElementById('scroll-to-top');

  if (!scrollTopButton) {
    return;
  }

  // スクロール位置に応じてボタンを表示/非表示
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });

  // ボタンクリックでトップへスクロール
  scrollTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 前後のページへのナビゲーション（キーボードショートカット）
 */
function initKeyboardNavigation() {
  const appendixPages = [
    'appendix-a.html',
    'appendix-b.html',
    'appendix-c.html',
    'appendix-d.html',
    'appendix-e.html',
    'appendix-f.html',
    'appendix-g.html',
    'appendix-h.html'
  ];

  const currentPage = getCurrentPage();
  const currentIndex = appendixPages.indexOf(currentPage);

  if (currentIndex === -1) {
    return;
  }

  document.addEventListener('keydown', function(e) {
    // 左矢印キー：前のページ
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      window.location.href = appendixPages[currentIndex - 1];
    }

    // 右矢印キー：次のページ
    if (e.key === 'ArrowRight' && currentIndex < appendixPages.length - 1) {
      window.location.href = appendixPages[currentIndex + 1];
    }
  });
}

/**
 * 読み込み進捗インジケーター
 */
function initProgressIndicator() {
  const progressBar = document.getElementById('reading-progress');

  if (!progressBar) {
    return;
  }

  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset;
    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + '%';
  });
}

/**
 * 初期化
 */
document.addEventListener('DOMContentLoaded', function() {
  initAppendixNavigation();
  initSmoothScroll();
  initScrollToTop();
  initKeyboardNavigation();
  initProgressIndicator();
});
