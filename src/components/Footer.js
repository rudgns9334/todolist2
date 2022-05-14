import Component from "../core/Component.js";

export default class Footer extends Component {

    setup() {
        this.$state = {
            name : ""
        };
    }

    template() {
        
        const { name } = this.$state;
        fetch("/todo")
        .then((response) => response.json())
        .then((data) => this.setState({
            name : data.name
        }));
        return `<p>${name}</p>`
    }
}