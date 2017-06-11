export default class CreateService {
    saveContract(contract) {
        console.log(contract);
    }

    getContracts() {
        console.log('asd');
        return Promise.resolve([
            { title: 'Buy a sport car', address: '278397rg2gf2gd9723dfg2792d' },
            { title: 'Buy an elephant', address: 'f2gd9723dfg2792d278397rg2g' }
        ]);
    }
}
