import app from '../src/app.js';

document.addEventListener('DOMContentLoaded', () => {
  appInit();
  yearElement();
  updateDateTime();
});

// Initialize the app in the main thread
const appInit = () => app.init();

// Update copyright year in the footer
const yearElement = () => {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

// Update date and time in the header
const updateDateTime = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const now = new Date();
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  const hours = now.getHours();

  //   Update day
  const dayElement = document.getElementById('get-day');
  if (dayElement) {
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayName = dayNames[now.getDay()];
    dayElement.textContent = dayName;
  }

  // Update date
  const dateElement = document.getElementById('get-date');
  if (dateElement) {
    dateElement.textContent = `${month} ${day}, ${year}`;
  }

  // Update greeting based on time of day
  const greetElement = document.getElementById('greet');
  if (greetElement) {
    let greeting = 'Good morning!';
    if (hours >= 12 && hours < 16) {
      greeting = 'Good afternoon!';
    } else if (hours >= 16 && hours < 24) {
      greeting = 'Good evening!';
    }
    greetElement.textContent = greeting;
  }
};
