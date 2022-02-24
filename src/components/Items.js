import Component from "../core/Component.js";

export default class Items extends Component {

  template() {
    const { filteredItems } = this.$props;
    return `
      <ul>
        ${filteredItems.map(({contents, check, seq}) => `
          <li data-seq="${seq}">
            ${contents}
            <input type="checkbox" class="checkBtn" ${check ? 'checked' : ''}>
            </button>
          </li>
        `).join('')}
      </ul>
    `
  }

  setEvent() {
    const { checkItem } = this.$props;

    this.addEvent('click', '.checkBtn', ({target}) => {
      checkItem(Number(target.closest('[data-seq]').dataset.seq));
    });

  }

}