const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test de metodos de clase FizzbuzzService", () => {
  test("1) Probando 'applyValidationInExplorer()' con número 1", () => {
    const explorer = {
      name: "Woopa2",
      score: 1,
    };

    const result = FizzbuzzService.applyValidationInExplorer(explorer);
    expect(result.trick).toBe(1);
  });

  test("2) Probando 'applyValidationInExplorer()' con número 3", () => {
    const explorer = {
      name: "Woopa2",
      score: 3,
    };

    const result = FizzbuzzService.applyValidationInExplorer(explorer);
    expect(result.trick).toMatch("FIZZ");
  });

  test("3) Probando 'applyValidationInExplorer()' con número 5", () => {
    const explorer = {
      name: "Woopa2",
      score: 5,
    };

    const result = FizzbuzzService.applyValidationInExplorer(explorer);
    expect(result.trick).toMatch("BUZZ");
  });

  test("4) Probando 'applyValidationInExplorer()' con número 15", () => {
    const explorer = {
      name: "Woopa2",
      score: 15,
    };

    const result = FizzbuzzService.applyValidationInExplorer(explorer);
    expect(result.trick).toMatch("FIZZBUZZ");
  });
});
