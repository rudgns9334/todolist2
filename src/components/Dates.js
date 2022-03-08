import Component from "../core/Component.js";

export default class Dates extends Component {
    template () {
        return `
            <div class="dates"><div>
        `
    }

    renderCalendar () {
        const { year, month, today } = this.$props;
        var startDay = new Date(year, month-1, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();

        var endDay = new Date(year, month, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

        console.log(prevDate, prevDay, nextDate, nextDay);
        
    }
}