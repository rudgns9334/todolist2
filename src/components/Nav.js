import Component from "../core/Component.js";

export default class Nav extends Component {
    template () {
        const { getState } = this.$props;
        return `
            <button class="nav-btn go-prev">&lt;</button>
            <div class="year-month">${getState.year}.${getState.month}</div>
            <button class="nav-btn go-next">&gt;</button>
        `
    }

    setEvent () {
        const { goPrevMonth, goNextMonth } = this.$props;
        this.addEvent('click', '.go-prev', () => {
            goPrevMonth();
        });

        this.addEvent('click', '.go-next', () => {
            goNextMonth();
        });
    }
}