export function getTimeDifference(date) {
  const current_date = new Date();
  const time_difference = date.getTime() - current_date.getTime();
  const total_seconds = Math.floor(time_difference / 1000);
  const days = Math.floor(total_seconds / (3600 * 24));
  const hours = Math.floor((total_seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((total_seconds % 3600) / 60);
  const seconds = Math.floor(total_seconds % 60);

  return { days, hours, minutes, seconds };
}
