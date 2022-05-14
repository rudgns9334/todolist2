import Component from "../core/Component.js";
import Items from "./Items.js";
import ItemAppender from "./ItemAppender.js";
import ItemDelete from "./ItemDelete.js";

export default class Todo extends Component{

    setup () {
        this.$state = {
            isFilter: 0,
            items: []
        };
    }

    template () {
        return `
            <main1 data-component="item-appender"></main1>
            <main2 data-component="items"></main2>
            <main3 data-component="item-delete"></main3>
        `;
    }

    mounted () {
        const { filteredItems, addItem, checkItem, deleteItem, deleteItemAll } = this;
        const $itemAppender = this.$target.querySelector('[data-component="item-appender"]');
        const $items = this.$target.querySelector('[data-component="items"]');
        const $itemDelete = this.$target.querySelector('[data-component="item-delete"]');
        
        new ItemAppender($itemAppender, {
            addItem: addItem.bind(this)
        });
        new Items($items, {
            filteredItems,
            checkItem: checkItem.bind(this),
        });
        new ItemDelete($itemDelete, {
            deleteItem: deleteItem.bind(this),
            deleteItemAll: deleteItemAll.bind(this) 
        });
    }

    get filteredItems () {
    const { isFilter, items } = this.$state;
    return items.filter(({ active }) => (isFilter === 1 && active) ||
      (isFilter === 2 && !active) ||
      isFilter === 0);
  }

  addItem (contents) {
    const {items} = this.$state;
    const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
    const check = false;
    fetch("/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
       id: seq,
       value: contents
      }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    this.setState({
      items: [
        ...items,
        {seq, contents, check}
      ]
    });
  }

  deleteItem () {
    const items = [ ...this.$state.items ];
    var deleteList = [];
    items.map((item) => {
        item.check ? deleteList.push(item.seq) : null;
    });
    deleteList.map((e) => {
      items.splice(items.findIndex(v => v.seq === e), 1);
    })
    this.setState({items});
  }

  deleteItemAll () {
    const items = [ ...this.$state.items ];
    items.splice(0, items.length);
    this.setState({items});
  }

  checkItem (seq) {
    const items = [ ...this.$state.items ];
    const index = items.findIndex(v => v.seq === seq);
    items[index].check = !items[index].check;
    this.setState({items});
  }

  filterItem (isFilter) {
    this.setState({ isFilter });
  }
}