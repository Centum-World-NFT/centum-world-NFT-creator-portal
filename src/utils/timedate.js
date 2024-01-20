// formatRelativeTime.js

export function formatRelativeTime(dateString) {
    const currentDate = new Date();
    const inputDate = new Date(dateString);
  
    const timeDifferenceInSeconds = Math.floor((currentDate - inputDate) / 1000);
  
    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds} sec ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes} min ago`;
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hours} hour ago`;
    } else if (timeDifferenceInSeconds < 604800) {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return `${days} day ago`;
    } else if (timeDifferenceInSeconds < 2628000) {
      const weeks = Math.floor(timeDifferenceInSeconds / 604800);
      return `${weeks} week ago`;
    } else if (timeDifferenceInSeconds < 31536000) {
      const months = Math.floor(timeDifferenceInSeconds / 2628000);
      return `${months} month ago`;
    } else {
      const years = Math.floor(timeDifferenceInSeconds / 31536000);
      return `${years} year ago`;
    }
  }
  