const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Task 1: Use find to locate first Water creature and log its name
const waterCreature = mythicalCreatures.find((creature) => {
	return creature.type === "Water";
});
console.log(waterCreature.name);

// Task 2: Use findIndex to locate Griffin index and log it
const griffinIndex = mythicalCreatures.findIndex((creature) => {
	return creature.name === "Griffin";
});
console.log(griffinIndex);

// Task 3: Use find to locate first creature in Enchanted Forest
const forestCreature = mythicalCreatures.find((creature) => {
	return creature.lastSeen === "Enchanted Forest";
});
console.log(forestCreature);
