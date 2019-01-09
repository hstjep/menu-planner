import queryString from 'query-string';
const apiPath = '/api';

function find(url, options) {
    return fetch(getRoute(url, options));
}

function get(url, options) {
    return fetch(getRoute(url, options));
}

function create(url, data) {
    return fetch(getRoute(url), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

function update(url, data) {
    return fetch(getRoute(url), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

function remove(url) {
    return fetch(getRoute(url), {
        method: 'DELETE'
    });
}

function upload(url, data) {
    let route = `${apiPath}/${url}`;

    return fetch(route, {
        method: 'POST',
        body: data
    });
}

function getRoute(url, options) {
    let route = `${apiPath}/${url}`;
    let params = queryString.stringify(options || {});

    if (params) {
        route = route.concat(`?${params}`);
    }
    return route;
}

function ApiClient() {
    return { get, find, create, update, remove, upload };
}

export default ApiClient;


