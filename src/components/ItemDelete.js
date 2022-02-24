import Component from "../core/Component.js";

export default class ItemDelete extends Component {

  template() {
    return `
      <button class="deleteBtn">선택 삭제</button>
      <button class="deleteBtnAll">전체 삭제</button>
    `
  }

  setEvent() {
    const { deleteItem, deleteItemAll } = this.$props;

    this.addEvent('click', '.deleteBtn', ({target}) => {
      deleteItem();
    });

    this.addEvent('click', '.deleteBtnAll',({target}) => {
      deleteItemAll();
    })
  }
}
