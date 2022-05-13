class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission)
            .length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        return explorers
            .filter((explorer) => explorer.mission == mission)
            .map((explorer) => explorer.githubUsername);
    }

    static getExplorersByStack(explorers, mission) {
        return explorers.filter((explorer) => {
            return explorer.stacks.includes(mission);
        });
    }
}

module.exports = ExplorerService;
