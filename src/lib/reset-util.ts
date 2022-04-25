import type Task from "./components/todo/data/ITask";
import tasks from "./components/todo/data/tasks";

const LS_TIME_KEY = "last-visit-time";
const DAY_IN_MILLIS = 24 * 60 * 60 * 1000;

const lastVisitDate = () => {
  const persistedDate = window.localStorage.getItem(LS_TIME_KEY);
  return new Date(persistedDate ?? 0);
};

const dailyResetDate = (ref: Date) => {
  const date = new Date(ref);
  date.setUTCHours(10, 0, 0, 0);
  return date;
};

const weeklyResetDate = (ref: Date) => {
  const date = dailyResetDate(ref);
  const thursday = 4; // thursday is the 4th day of the week.
  const currentDay = date.getUTCDay();
  const reamingMillis = (thursday - currentDay) * DAY_IN_MILLIS;
  date.setUTCMilliseconds(date.getUTCMilliseconds() + reamingMillis);
  return date;
};

const shouldResetDaily = () => {
  const now = new Date();
  const lastVisit = lastVisitDate();
  return lastVisit < dailyResetDate(now) && now > dailyResetDate(lastVisit);
};

const shouldResetWeakly = () => {
  const now = new Date();
  const lastVisit = lastVisitDate();
  return lastVisit < weeklyResetDate(now) && now > weeklyResetDate(lastVisit);
};

const reset = (tasksToReset: Task[]) => {
  tasksToReset.forEach(({ title }) => {
    const key = `${title.toLocaleLowerCase().split(" ").join("-")}-checkbox`;
    window.localStorage.removeItem(key);
  });
};

const resetDaily = (force = false) => {
  return force
    ? reset(tasks.dailies)
    : shouldResetDaily() && reset(tasks.dailies);
};

const resetWeakly = (force = false) => {
  return force
    ? reset(tasks.weeklies)
    : shouldResetWeakly() && reset(tasks.weeklies);
};
const updateLastVisit = () => {
  window.localStorage.setItem(LS_TIME_KEY, new Date().toJSON());
};

export { resetDaily, resetWeakly, updateLastVisit };
