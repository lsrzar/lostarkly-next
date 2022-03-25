interface Task {
  title: string;
  amount: number;
  icon?: string;
}

const dailies: Task[] = [
  { title: "Una's Tasks", amount: 1, icon: "/task-icons/una-d.svg" },
  {
    title: "Guardian Raids",
    amount: 1,
    icon: "/task-icons/guardian-raids.svg",
  },
  { title: "Chaos Dungeon", amount: 1, icon: "/task-icons/chaos-dungeon.svg" },
  { title: "World Boss", amount: 1, icon: "/task-icons/world-boss.svg" },
  { title: "Chaos Gate", amount: 1, icon: "/task-icons/chaos-gate.svg" },
  {
    title: "Adventure Island",
    amount: 1,
    icon: "/task-icons/adventure-island.svg",
  },
  { title: "Rapport", amount: 1, icon: "/task-icons/rapport.svg" },
  { title: "Guild Contribution", amount: 1, icon: "/task-icons/guild.svg" },
  { title: "Life Skills", amount: 1, icon: "/task-icons/life-skills.svg" },
  {
    title: "Anguished Island",
    amount: 1,
    icon: "/task-icons/anguished-island.svg",
  },
  { title: "Stronghold", amount: 1, icon: "/task-icons/stronghold.svg" },
];

const weeklies: Task[] = [
  { title: "Una's Tasks", amount: 1, icon: "/task-icons/una-w.svg" },
  { title: "Abyss", amount: 1, icon: "/task-icons/abyss.svg" },
  { title: "Port Exchange", amount: 1, icon: "/task-icons/port.svg" },
  {
    title: "Bloodstone Exchange",
    amount: 1,
    icon: "/task-icons/bloodstone-exchange.svg",
  },
];

const tasks = { dailies, weeklies };

export default tasks;
