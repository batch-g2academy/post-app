
export const fetchApi = (route, optional) => {
    return fetch(`https://jsonplaceholder.typicode.com/${route}`, optional);
}