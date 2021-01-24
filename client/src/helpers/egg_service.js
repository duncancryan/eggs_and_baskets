const eggIndex = '/api/eggs/';

export default class EggService {
    // get all
    getEggs() {
        return fetch(eggIndex)
            .then(res => res.json());
    }
    getEggById(id) {
        return fetch(eggIndex + id)
            .then(res => res.json())
    }
    deleteEggById(id) {
        return fetch(eggIndex + id, {
            method: 'DELETE'
        })
    }
    returnEgg(payload) {
        delete payload._id
        return fetch(eggIndex, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json)
    }

}