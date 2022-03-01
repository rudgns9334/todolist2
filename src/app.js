import Component from "./core/Component.js";
import Todo from "./components/Todo.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Clock from "./components/Clock.js";

export default class App extends Component {

  template () {
    return `
      <header data-component="head"></header>
      <main data-component="todo"></main>
      <footer data-component="foot"></footer>
      <clock data-component="time"></clock>
    `;
  }

  mounted () {
    const $todo = this.$target.querySelector('[data-component="todo"]');
    const $head = this.$target.querySelector('[data-component="head"]');
    const $foot = this.$target.querySelector('[data-component="foot"]');
    const $clock = this.$target.querySelector('[data-component="time"]');

    new Header($head, null);
    new Todo($todo, null);
    new Footer($foot, null);
    new Clock($clock, null);
  }

}