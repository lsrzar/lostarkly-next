interface Task {
  title: string;
  icon?: string;
}

const dailies: Task[] = [
  { title: "Una's Tasks", icon: "/task-icons/una-d.svg" },
  {
    title: "Guardian Raids",
    icon: "/task-icons/guardian-raids.svg",
  },
  { title: "Chaos Dungeon", icon: "/task-icons/chaos-dungeon.svg" },
  { title: "World Boss", icon: "/task-icons/world-boss.svg" },
  { title: "Chaos Gate", icon: "/task-icons/chaos-gate.svg" },
  {
    title: "Adventure Island",
    icon: "/task-icons/adventure-island.svg",
  },
  { title: "Rapport", icon: "/task-icons/rapport.svg" },
  { title: "Guild Contribution", icon: "/task-icons/guild.svg" },
  { title: "Life Skills", icon: "/task-icons/life-skills.svg" },
  {
    title: "Anguished Island",
    icon: "/task-icons/anguished-island.svg",
  },
  { title: "Stronghold", icon: "/task-icons/stronghold.svg" },
];

const weeklies: Task[] = [
  { title: "Una's Weekly Tasks", icon: "/task-icons/una-w.svg" },
  { title: "Abyss", icon: "/task-icons/abyss.svg" },
  { title: "Port Exchange", icon: "/task-icons/port.svg" },
  {
    title: "Bloodstone Exchange",
    icon: "/task-icons/bloodstone-exchange.svg",
  },
];

const tasks = { dailies, weeklies };

export default tasks;
