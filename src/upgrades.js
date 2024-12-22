// Reminder that logic is calculated every 1/10th of a second. meaning descriptions of increases
// should be 10x what they are calculated per tick.
upgrades = [
    {
        tier: 1,
        building: 'cursor',
        cost: 100,
        increase: 0.01,
        title: "Steel Cursors",
        description: "Increases PpS of Cursors by 0.1"
    },
    {
        tier: 2,
        building: 'cursor',
        cost: 1000,
        increase: 0.01,
        title: "Cobalt Cursors",
        description: "Increases PpS of Cursors by 0.1"
    }
]

export default upgrades;