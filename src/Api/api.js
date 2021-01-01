// Base URL
const baseUrl = "https://api.rawg.io/api/games?";

// Current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Get Current Date , Last Date , Next Date
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const fullLastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const fullNextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
export const popularGamesUrl = `${baseUrl}dates=${fullLastYear},${currentDate}&ordering=-rating&page_size=12`;
//UpComing Games
export const upcomingGamesUrl = `${baseUrl}dates=${currentDate},${fullNextYear}&ordering=-rating&page_size=12`;
//New Games
export const newGamesUrl = `${baseUrl}dates=${fullLastYear},${currentDate}&ordering=-released&page_size=12`;
