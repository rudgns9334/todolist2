import Component from "../core/Component.js";

export default class ItemAppender extends Component {

  template() {
    return `<div class="todoinput">
            <input type="text" class="appender" placeholder="할 일" />
            <button type="submit" class="button addBtn">추가</button>
            </div>`;
  }

  setEvent() {
    const { addItem } = this.$props;
    this.addEvent('keyup', '.appender', ({ key, target }) => {
      if (key !== 'Enter') return;
      addItem(target.value);
    });
    this.addEvent('click', '.addBtn', ({target}) => {
      addItem(target.closest("div").firstChild.nextSibling.value);
    });
  }
}
