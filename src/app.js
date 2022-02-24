import Component from "./core/Component.js";
import Items from "./components/Items.js";
import ItemAppender from "./components/ItemAppender.js";
import ItemDelete from "./components/ItemDelete.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
//import Clock from "./components/Clock.js";

export default class App extends Component {

  setup () {
    this.$state = {
      isFilter: 0,
      items: []
    };
  }

  template () {
    return `
      <header data-component="head"></header>
      <main1 data-component="item-appender"></main1>
      <main2 data-component="items"></main2>
      <main3 data-component="item-delete"></main3>
      <footer data-component="foot"></footer>
      <clock data-component="time"></clock>
    `;
  }

  mounted () {
    const { filteredItems, addItem, checkItem, deleteItem, deleteItemAll } = this;
    const $itemAppender = this.$target.querySelector('[data-component="item-appender"]');
    const $items = this.$target.querySelector('[data-component="items"]');
    const $itemDelete = this.$target.querySelector('[data-component="item-delete"]');
    const $head = this.$target.querySelector('[data-component="head"]');
    const $foot = this.$target.querySelector('[data-component="foot"]');
    //const $clock = this.$target.querySelector('[data-component="time"]');

    new Header($head, null);
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
    new Footer($foot, null);
    //new Clock($clock, null);
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

//   get setClock () {
//     var dateInfo = new Date(); 
//     var hour = dateInfo.getHours()<10?"0"+dateInfo.getHours():dateInfo.getHours();
//     var min = dateInfo.getMinutes()<10?"0"+dateInfo.getMinutes():dateInfo.getMinutes();
//     var sec = dateInfo.getSeconds()<10?"0"+dateInfo.getSeconds():dateInfo.getSeconds();
//     var year = dateInfo.getFullYear();
//     var month = dateInfo.getMonth()+1;
//     var date = dateInfo.getDate();
//     return {time:{
//       Hour: hour,
//       Min: min,
//       Sec: sec,
//       Year: year,
//       Month: month,
//       Date: date
//     }
//     };
//   }

//   modifyNumber(time){
//     if(parseInt(time)<10){
//         return "0"+ time;
//     }
//     else
//         return time;
// }
}