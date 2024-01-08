export function getMonthName(monthId) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    if (monthId >= 1 && monthId <= 12) {
      return months[monthId - 1];
    } else {
      return "Invalid Month"; 
    }
  }