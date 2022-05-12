const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test de metodos ExplorerController", () => {
    test("1) Probando metodo 'getExplorersByMission()'", () => {
        const wanted = {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node",
            stacks: ["javascript", "reasonML", "elm"],
        };
        expect(ExplorerController.getExplorersByMission("node")[0]).toEqual(
            wanted
        );
    });

    test("2) Probando metodo 'getExplorersUsernamesByMission()'", () => {
        const wanted = {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node",
            stacks: ["javascript", "reasonML", "elm"],
        };
        expect(
            ExplorerController.getExplorersUsernamesByMission("node")[0]
        ).toMatch(wanted.githubUsername);
    });

    test("3) Probando metodo 'getExplorersUsernamesByMission()'", () => {
        const wanted = {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node",
            stacks: ["javascript", "reasonML", "elm"],
        };
        expect(
            ExplorerController.getExplorersUsernamesByMission("node").length
        ).toBe(10);
    });
});

// class ExplorerController {
//         static getExplorersByMission(mission) {
//             const explorers = Reader.readJsonFile("explorers.json");
//             return ExplorerService.filterByMission(explorers, mission);
//         }

//         static getExplorersUsernamesByMission(mission) {
//             const explorers = Reader.readJsonFile("explorers.json");
//             return ExplorerService.getExplorersUsernamesByMission(
//                 explorers,
//                 mission
//             );
//         }

//         static getExplorersAmonutByMission(mission) {
//             const explorers = Reader.readJsonFile("explorers.json");
//             return ExplorerService.getAmountOfExplorersByMission(
//                 explorers,
//                 mission
//             );
//         }
//     }
