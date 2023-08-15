export const convertDate = (date: string | Date): string => {
  if (typeof date === 'string') date = new Date(date);

  let day: string = String(date.getDate());
  let month: string = String(date.getMonth() + 1);
  const year: string = String(date.getFullYear());

  if (Number(day) < 10) day = `0${day}`;
  if (Number(month) < 10) month = `0${month}`;

  let hours: string = String(date.getHours());
  let minutes: string = String(date.getMinutes());

  if (Number(hours) < 10) hours = `0${hours}`;
  if (Number(minutes) < 10) minutes = `0${minutes}`;

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
