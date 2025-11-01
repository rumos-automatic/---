/**
 * 検索機能（用語索引・FAQ用）
 * リアルタイム検索・フィルタリング
 */

/**
 * 用語索引の検索機能
 */
function initGlossarySearch() {
  const searchInput = document.getElementById('glossary-search');
  const glossaryItems = document.querySelectorAll('.glossary-item');

  if (!searchInput || glossaryItems.length === 0) {
    return;
  }

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();

    glossaryItems.forEach(item => {
      const term = item.getAttribute('data-term').toLowerCase();
      const definition = item.getAttribute('data-definition').toLowerCase();
      const reading = item.getAttribute('data-reading') ? item.getAttribute('data-reading').toLowerCase() : '';

      // 用語、読み、定義のいずれかに検索語が含まれているかチェック
      if (term.includes(searchTerm) || definition.includes(searchTerm) || reading.includes(searchTerm)) {
        item.style.display = 'block';

        // 検索語をハイライト
        highlightSearchTerm(item, searchTerm);
      } else {
        item.style.display = 'none';
      }
    });

    // 検索結果の件数を表示
    const visibleItems = Array.from(glossaryItems).filter(item => item.style.display !== 'none');
    updateSearchResults(visibleItems.length, glossaryItems.length);
  });
}

/**
 * FAQ検索機能
 */
function initFAQSearch() {
  const searchInput = document.getElementById('faq-search');
  const faqItems = document.querySelectorAll('.faq-item');

  if (!searchInput || faqItems.length === 0) {
    return;
  }

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();

    faqItems.forEach(item => {
      const question = item.getAttribute('data-question').toLowerCase();
      const answer = item.getAttribute('data-answer').toLowerCase();
      const category = item.getAttribute('data-category') ? item.getAttribute('data-category').toLowerCase() : '';

      // 質問、回答、カテゴリのいずれかに検索語が含まれているかチェック
      if (question.includes(searchTerm) || answer.includes(searchTerm) || category.includes(searchTerm)) {
        item.style.display = 'block';

        // 検索語をハイライト
        highlightSearchTerm(item, searchTerm);
      } else {
        item.style.display = 'none';
      }
    });

    // 検索結果の件数を表示
    const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
    updateSearchResults(visibleItems.length, faqItems.length);
  });
}

/**
 * カテゴリフィルタ機能（FAQ用）
 */
function initCategoryFilter() {
  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  const faqItems = document.querySelectorAll('.faq-item');

  if (categoryButtons.length === 0 || faqItems.length === 0) {
    return;
  }

  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      // ボタンのアクティブ状態を更新
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // FAQ項目をフィルタ
      faqItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'all' || itemCategory === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // 検索入力をクリア
      const searchInput = document.getElementById('faq-search');
      if (searchInput) {
        searchInput.value = '';
      }

      // 結果件数を更新
      const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
      updateSearchResults(visibleItems.length, faqItems.length);
    });
  });
}

/**
 * アコーディオン機能（FAQ用）
 */
function initAccordion() {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = content.style.maxHeight;

      // すべてのアコーディオンを閉じる（オプション：1つだけ開きたい場合）
      // document.querySelectorAll('.accordion-content').forEach(item => {
      //   item.style.maxHeight = null;
      //   item.previousElementSibling.classList.remove('active');
      // });

      // クリックされたアコーディオンを開閉
      if (isOpen) {
        content.style.maxHeight = null;
        this.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        this.classList.add('active');
      }
    });
  });
}

/**
 * 検索語をハイライト
 */
function highlightSearchTerm(element, searchTerm) {
  if (!searchTerm) {
    return;
  }

  // ハイライトを削除（既存のハイライトをクリア）
  const highlightedElements = element.querySelectorAll('.search-highlight');
  highlightedElements.forEach(el => {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });

  // 新しいハイライトを追加（簡易実装）
  // 本格的な実装にはより複雑なDOM操作が必要
}

/**
 * 検索結果の件数を更新
 */
function updateSearchResults(visibleCount, totalCount) {
  const resultElement = document.getElementById('search-results-count');

  if (resultElement) {
    resultElement.textContent = `${visibleCount}件 / 全${totalCount}件`;
  }
}

/**
 * 初期化
 */
document.addEventListener('DOMContentLoaded', function() {
  initGlossarySearch();
  initFAQSearch();
  initCategoryFilter();
  initAccordion();
});
