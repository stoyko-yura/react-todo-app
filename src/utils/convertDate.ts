export const dateToLocalIso = (date: Date) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60_000;
  const localIsoTime = new Date(new Date(date).getTime() - timezoneOffset);

  return localIsoTime;
};

export const DateToString = (date: Date) => {
  const dateString = new Date(date).toLocaleTimeString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  return dateString;
};
