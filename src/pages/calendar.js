import Component from "../core/Component.js";
import Cal from "../components/Calendar.js";

export default class Calendar extends Component {
    template () {
        return `
        <div class="page">
            <button class="button routingBtn" route="/">일정보기</button>
        </div>
        <main data-component="calendar"></main>
        `;
    }

    mounted () {
        const $calendar = this.$target.querySelector('[data-component="calendar"]');
        new Cal($calendar, null);
    }

}