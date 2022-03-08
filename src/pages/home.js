import Component from "../core/Component.js";
import Todo from "../components/Todo.js";

export default class Home extends Component{

    template () {
        return `
        <div class="page">
            <button class="button routingBtn" route="/calendar">달력 보기</button>
        </div>
        <main data-component="todo"></main>
        `;
    }

    mounted () {
        const $todo = this.$target.querySelector('[data-component="todo"]');
        new Todo($todo, null);
    }

}