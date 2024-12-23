// Reminder that logic is calculated every 1/10th of a second. meaning descriptions of increases
// should be 10x what they are calculated per tick.
import cursor from './assets/cursor.png'
import factory from './assets/factory.png'
import farmer from './assets/farmer.png'

const upgrades = [
    {
        tier: 1,
        building: 'cursor',
        cost: 100,
        increase: 0.01,
        title: "Steel Cursors",
        description: "Increases PpS per Cursor by 0.1",
        img: cursor,
    },
    {
        tier: 2,
        building: 'cursor',
        cost: 1000,
        increase: 0.01,
        title: "Cobalt Cursors",
        description: "Increases PpS per Cursor by 0.1",
        img: cursor,
    },
    {
        tier: 1,
        building: 'farmer',
        cost: 300,
        increase: 0.1,
        title: "Evergreen potato farms",
        description: "Increases PpS per Farm by 1",
        img: farmer,
    },
    {
        tier: 2,
        building: 'farmer',
        cost: 1300,
        increase: 0.1,
        title: "Potato Co-Op",
        descripton: "Increases PpS per Farm by 1",
        img: farmer,
    },
    {
        tier: 1,
        building: 'factory',
        cost: 5000,
        increase: 2.5,
        title: "Turbo Encabulators",
        description: "Increases PpS per Factory by 25",
        img: factory,
    },
    {
        tier: 2,
        building: "factory",
        cost: 25000,
        increase: 2.5,
        title: "Lower Minimum wage",
        description: "Increases PpS per Factory by 25",
        img: factory,
    },
]

export default upgrades