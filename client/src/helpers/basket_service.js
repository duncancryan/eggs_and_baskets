const basketIndex = '/api/baskets/';

export default class BasketService {
    // get all
    getBaskets() {
        return fetch(basketIndex)
            .then(res => res.json());
    }
    updateBasket(id, payload){
        return fetch(basketIndex + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
    addBasket(payload) {
        return fetch(basketIndex, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}