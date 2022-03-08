import Component from "./core/Component.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Clock from "./components/Clock.js";
import Router from "./routing/router.js";

export default class App extends Component {

  template () {
    return `
      <header data-component="head"></header>
      <router data-component="router"></router>
      <footer data-component="foot"></footer>
      <clock data-component="time"></clock>
    `;
  }

  mounted () {
    const $head = this.$target.querySelector('[data-component="head"]');
    const $foot = this.$target.querySelector('[data-component="foot"]');
    const $clock = this.$target.querySelector('[data-component="time"]');
    const $router = this.$target.querySelector('[data-component="router"]');

    new Router($router);
    new Header($head, null);
    new Footer($foot, null);
    new Clock($clock, null);
  }

}