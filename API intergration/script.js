$(document).ready(function() {
    $('#calendar').fullCalendar({
      googleCalendarApiKey: 'YOUR_GOOGLE_API_KEY',
      events: {
        googleCalendarId: 'YOUR_GOOGLE_CALENDAR_ID'
      }
    });
  }); 