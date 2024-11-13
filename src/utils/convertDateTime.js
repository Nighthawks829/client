export function convertDateTime(inputDateTime) {
  // Parse the input date and time
  const date = new Date(inputDateTime); // Format the date and time as 'DD MMM YYYY HH:MM'
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    // timeZone: "UTC",
  }; // Convert the date to '19 JAN 2012 08:00'
  const formattedDate = new Intl.DateTimeFormat("en-GB", options)
    .format(date)
    .toUpperCase();
  return formattedDate;
}