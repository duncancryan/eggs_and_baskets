const basketIndex = '/api/baskets/';

export default class BasketService {
    // get all
    getBaskets() {
        return fetch(basketIndex)
            .then(res => res.json());
    }
}