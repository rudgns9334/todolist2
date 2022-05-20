import Component from "../core/Component.js";

export default class Items extends Component {

  setup() {
    this.$state = {
      items: [{
        id:999999,
        value:""
      }]
    }
  }

  template() {
    const { items } = this.$state;
    const data = items[0];
    console.log(items);
    console.log(data);
    items.map((i) => {
      console.log(i.id);
      console.log(i.value);
    })
    return `
    <div class="itemlist">
      <ul>
        ${items.map(({id, value}) => `
          <li data-seq="${id}">
          <label class="check">
            <input type="checkbox" class="checkBtn">
            <p class="value"> ${value} </p>
            <span class="checkmark"></span>
            </label>
          </li>
        `).join('')}
      </ul>
      </div>
    `
  }

  componenetDidMount() {
    fetch("/todolist")
    .then((res)=>res.json())
    .then((data) => {
      let items = [];
      data.map((i) => {
        const id = i.id;
        const value = i.value;
        items.push({id, value});
      })
      this.setState({
        items
      });
    })
  }

  setEvent() {
    const { checkItem } = this.$props;

    this.addEvent('click', '.checkBtn', ({target}) => {
      checkItem(Number(target.closest('[data-seq]').dataset.seq));
    });

  }

}