import Home from "../pages/home.js";
import Calendar from "../pages/calendar.js";

export default class Router {
    $routes;
    $target;
    constructor ($target) {
        this.$target = $target;
        this.setup();
        this.initialRoutes($target);
    }
    setup () {
        this.$routes = {
            '/': Home,//Home
            '/calendar': Calendar//Calendar
        }
    }

    setEvent () { // 라우터 기능이 아니니까 ㅇㅎㅇㅎㅇㅎ
        const historyLinker = document.querySelectorAll(".routingBtn");
        historyLinker.forEach(e => {
            e.addEventListener('click', event => {
                const pathName = event.target.getAttribute('route'); // 버튼 자체를 컴포넌트로 분리
                this.historyRouterPush(pathName, this.$target);
            })
        })
    }

    initialRoutes(e){
        this.renderHTML(e,this.$routes['/']);
        window.onpopstate = () => this.renderHTML(e, this.$routes[window.location.pathname]);
    }

    historyRouterPush(pathName, e) {
        window.history.pushState({}, pathName, window.location.origin + pathName);
        this.renderHTML(e, this.$routes[pathName]);
    }

    renderHTML(e, route){
        new route(e,null);
        this.setEvent();
    }
}