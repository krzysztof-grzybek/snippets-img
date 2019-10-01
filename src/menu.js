class Menu {
  constructor(container, scripts) {
    container.innerHTML = this.createHtml(scripts);
    this.rootEl = container.firstElementChild;
    this.addEventListeners();
  }

  createHtml(scripts) {
    return `
      <ul>
        ${
          scripts.reduce((acc, item) => {
            return acc + this.createItemHtml(item);
          }, '')
        }
      </ul>
    `;
  }

  createItemHtml(item) {
    return `
      <li>
        <button data-menu-item="${item.path}" class="btn">
          <span class="btn__label" data-menu-item__label>${item.label}</span>
          <br><span class="btn__path">${item.path}</span>
        </button>
      </li>
    `
  }

  addEventListeners() {
    this.rootEl.addEventListener('click', e => {
      const clickedItem = e.target.closest('[data-menu-item]');
      if (clickedItem) {
        const path = clickedItem.getAttribute('data-menu-item');
        const label = clickedItem.querySelector('[data-menu-item__label]').innerHTML;
        this.setItemsActiveState(clickedItem);
        this.clickCallback({ path, label });
      }
    });
  }

  onItemClick(callback) {
    this.clickCallback = callback;
  }

  setItemsActiveState(activeEl) {
    this.rootEl.querySelectorAll('[data-menu-item]').forEach(el => {
      el.classList.remove('active');
    });
    activeEl.classList.add('active');
  }
}

export { Menu };
