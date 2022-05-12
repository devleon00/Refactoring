const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test de metodos de clase ExplorerService", () => {
    test("1) Probando 'filterByMission()'", () => {
        const explorer = [{
            name: "Woopa2",
            githubUsername: "ajolonauta2",
            score: 2,
            mission: "node",
            stacks: ["javascript", "groovy", "elm"],
        }];

        const result = ExplorerService.filterByMission(explorer, "node");
        expect(result.length).toBe(1);
    });

    test("2) Probando 'getAmountOfExplorersByMission()'", () => {
        const explorer = [{
            name: "Woopa2",
            githubUsername: "ajolonauta2",
            score: 2,
            mission: "node",
            stacks: ["javascript", "groovy", "elm"],
        }];

        const result = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
        expect(result).toBe(1);
    });

    test("3) Probando 'getExplorersUsernamesByMission()'", () => {
        const explorer = [{
            name: "Woopa2",
            githubUsername: "ajolonauta2",
            score: 2,
            mission: "node",
            stacks: ["javascript", "groovy", "elm"],
        }];

        const result = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(result[0]).toBe("ajolonauta2");
    });
});

