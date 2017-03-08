import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Karol', role: 'Team Leader'},
      {id: 12, name: 'LBAK'},
      {id: 13, name: 'Kuba'},
      {id: 14, name: 'Zibi'},
      {id: 15, name: 'Pati'},
      {id: 16, name: 'Domin'},
      {id: 17, name: 'Pawel ELO'},
      {id: 18, name: 'Bilny'},
      {id: 19, name: 'LUK'},
    ];
    return {heroes};
  }
}
