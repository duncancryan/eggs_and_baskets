const eggIndex = '/api/eggs';

export default class EggService {
    // get all
    getEggs(){
        return fetch(eggIndex)
            .then(res => res.json());
    }
}