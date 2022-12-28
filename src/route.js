    export const route = (event) => {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        handleLocation();
        console.log('working route function');
    };
    
    const routes = {
        404: "./404.html",
        "/": "./index.html",
        "/garage": "./garage.html",
        "/winners": "./winners.html",
    };
    
    export const handleLocation = async () => {
        const path = window.location.pathname;
        const route = routes[path] || routes[404];
        const html = await fetch(route).then((data) => data.text());
        document.getElementById("root").innerHTML = html;
    };
    
    window.onpopstate = handleLocation;
    window.route = route;
    handleLocation();

