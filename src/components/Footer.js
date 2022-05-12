import Component from "../core/Component.js";

export default class Footer extends Component {
    template() {
        fetch("/todo")
        .then((response) => console.log(response));
        return `<p>ddd</p>`
    }
}