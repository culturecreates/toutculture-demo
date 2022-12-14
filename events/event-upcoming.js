export const upcoming = (details) => {
  if (details.upcomingSubEventCount > 0) {
    return `<br>${details.upcomingSubEventCount}/${details.totalSubEventCount} events remaining`;
  } else {
    return "";
  }
};
