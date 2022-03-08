import Component from "../core/Component.js";
import Nav from "./Nav.js";
import Day from "./Day.js";

export default class Calendar extends Component {
    
    setup () {
        const $date = new Date();
        this.$state = {
            year: $date.getFullYear(),
            month: $date.getMonth()+1,
            today: $date.getDate()
        }
    }

    template () {
        return `
            <nav data-component="nav"></nav>
            <day data-component="day"></day>
            <div class="dates"></div>
        `
    }

    mounted () {
        const { getState, renderCalendar, goPrevMonth, goNextMonth } = this;
        const $nav = this.$target.querySelector('[data-component="nav"]');
        const $day = this.$target.querySelector('[data-component="day"]');
        this.renderCalendar();
        new Nav($nav, {
            getState,
            goPrevMonth: goPrevMonth.bind(this),
            goNextMonth: goNextMonth.bind(this)

        });
        new Day($day, null);
    }

    get getState(){
        return this.$state;
    }

    renderCalendar () {
        const { year, month, today } = this.$state;
        var startDay = new Date(year, month-1, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();
        var endDay = new Date(year, month, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

        var calendar = document.querySelector('.dates');
        calendar.innerHTML = '';

        for(var i=prevDate-prevDay;i<=prevDate;i++){
            calendar.innerHTML = calendar.innerHTML+ '<div class="day prev disable">' + i + '</div>';
        }
        for(var i=1;i<=nextDate;i++){
            calendar.innerHTML = calendar.innerHTML+'<div class="day current">'+i+'</div>';
        }
        for(var i=1;i<=(6-nextDay==6?6:6-nextDay);i++){
            calendar.innerHTML = calendar.innerHTML+'<div class="day mext disable">'+i+'</div>';
        }
        console.log(calendar);
        if(month == new Date().getMonth()+1){
            var todayDate = today;
            var currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate-1].classList.add('today');
        }
    }

    goPrevMonth() {
        var { year, month, today } = this.$state;
        month = month-1;
        this.setState({year, month, today})
    }

    goNextMonth() {
        var { year, month, today } = this.$state;
        month = month+1;
        this.setState({year, month, today})
    }

}