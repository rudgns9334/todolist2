import Component from "../core/Component.js";

export default class Clock extends Component {
    template() {
        const { setClock } = this.$props;
        console.log(setClock);
        return `${setClock.map(({Hour, Min, Sec, Year, Month, Date}) => `
            <div>${Hour}:${Min}:${Sec}</div>
            <div>${Year}년${Month}월${Date}일</div>
        `).join('')}
        `
    }

    setEvent() {
    }
}