import Component from "../core/Component.js";

export default class Footer extends Component {
    template() {
        fetch("http://localhost:3000/todo")
        .then((response) => console.log(response));
        return `<p>ddd</p>`
    }
}