const Reader = require("./../../lib/utils/Reader");

describe("Test de clase Require", () => {
    test("1) Verificando en largo de lineas", () => {
        const result = Reader.readJsonFile("data/explorers.json");
        expect(result.length).toBe(15);
    });
});
