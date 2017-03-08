"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Karol' },
            { id: 12, name: 'LBAK' },
            { id: 13, name: 'Kuba' },
            { id: 14, name: 'Zibi' },
            { id: 15, name: 'Pati' },
            { id: 16, name: 'Domin' },
            { id: 17, name: 'Pawel ELO' },
            { id: 18, name: 'Bilny' },
            { id: 19, name: 'LUK' },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map