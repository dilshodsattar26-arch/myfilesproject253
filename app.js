const coreHandlerInstance = {
    version: "1.0.253",
    registry: [435, 1365, 1739, 1959, 817, 1992, 1260, 1859],
    init: function() {
        const nodes = this.registry.filter(x => x > 300);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});