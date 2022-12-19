import generateContent404 from '../pages/404';
import generateContentCart from '../pages/cart';
import generateContentCatalog from '../pages/catalog';
import generateContentDetails from '../pages/details';

const route = (event: Event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', (event.target as HTMLLinkElement).href);
    handleLocation();
};

const routes: { [index: string]: () => HTMLElement } = {
    '404': generateContent404,
    '/': generateContentCatalog,
    '/cart': generateContentCart,
    '/details': generateContentDetails,
};

const handleLocation = async () => {
    const path = window.location.pathname;
    console.log(window.location.search.substring(1));
    const route = routes[path] || routes['404'];
    const mainPage = document.getElementById('main-page');
    if (mainPage instanceof Element) {
        mainPage.innerHTML = '';
        mainPage.append(route());
    }
};

export { route, handleLocation };