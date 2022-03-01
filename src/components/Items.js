import Component from "../core/Component.js";

export default class Items extends Component {

  template() {
    const { filteredItems } = this.$props;
    return `
    <div class="itemlist">
      <ul>
        ${filteredItems.map(({contents, check, seq}) => `
          <li data-seq="${seq}">
          <label class="check">
            <input type="checkbox" class="checkBtn" ${check ? 'checked' : ''}>
            <p class="value"> ${contents} </p>
            <span class="checkmark"></span>
            </label>
          </li>
        `).join('')}
      </ul>
      </div>
    `
  }

  setEvent() {
    const { checkItem } = this.$props;

    this.addEvent('click', '.checkBtn', ({target}) => {
      checkItem(Number(target.closest('[data-seq]').dataset.seq));
    });

  }

}