import Component from "../core/Component.js";
import { store } from "../store/store.js";

export default class Clock extends Component {


    template () {
        const state = store.getState();
        console.log(state);
        return `
            <div>${hour}:${min}:${sec}</div>
            <div>${year}년${month}월${date}일</div>
        `
    }

    setEvent () {
        setInterval(this.setClock.bind(this), 1000);
    }

    setClock () {
        const $dateInfo = new Date(); 
        const hour = $dateInfo.getHours()<10?"0"+$dateInfo.getHours():$dateInfo.getHours();
        const min = $dateInfo.getMinutes()<10?"0"+$dateInfo.getMinutes():$dateInfo.getMinutes();
        const sec = $dateInfo.getSeconds()<10?"0"+$dateInfo.getSeconds():$dateInfo.getSeconds();
        const year = $dateInfo.getFullYear();
        const month = $dateInfo.getMonth()+1;
        const date = $dateInfo.getDate();
        this.setState({
                hour, min, sec, year, month, date
        });
    }
}