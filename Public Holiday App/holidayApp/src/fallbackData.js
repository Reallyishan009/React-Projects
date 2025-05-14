// This is a fallback list of countries we'll use if the API fails
const FALLBACK_COUNTRIES = [
  { isoCode: "US", name: "United States" },
  { isoCode: "GB", name: "United Kingdom" },
  { isoCode: "CA", name: "Canada" },
  { isoCode: "AU", name: "Australia" },
  { isoCode: "DE", name: "Germany" },
  { isoCode: "FR", name: "France" },
  { isoCode: "IN", name: "India" },
  { isoCode: "JP", name: "Japan" },
  { isoCode: "BR", name: "Brazil" },
  { isoCode: "ZA", name: "South Africa" }
];

// This is a fallback map of holidays we'll use if the API fails
const FALLBACK_HOLIDAYS = {
  "US": [
    { id: "us-1", name: "New Year's Day", date: "2025-01-01" },
    { id: "us-2", name: "Martin Luther King Jr. Day", date: "2025-01-20" },
    { id: "us-3", name: "Presidents' Day", date: "2025-02-17" },
    { id: "us-4", name: "Memorial Day", date: "2025-05-26" },
    { id: "us-5", name: "Independence Day", date: "2025-07-04" },
    { id: "us-6", name: "Labor Day", date: "2025-09-01" },
    { id: "us-7", name: "Columbus Day", date: "2025-10-13" },
    { id: "us-8", name: "Veterans Day", date: "2025-11-11" },
    { id: "us-9", name: "Thanksgiving Day", date: "2025-11-27" },
    { id: "us-10", name: "Christmas Day", date: "2025-12-25" }
  ],
  "GB": [
    { id: "gb-1", name: "New Year's Day", date: "2025-01-01" },
    { id: "gb-2", name: "Good Friday", date: "2025-04-18" },
    { id: "gb-3", name: "Easter Monday", date: "2025-04-21" },
    { id: "gb-4", name: "Early May Bank Holiday", date: "2025-05-05" },
    { id: "gb-5", name: "Spring Bank Holiday", date: "2025-05-26" },
    { id: "gb-6", name: "Summer Bank Holiday", date: "2025-08-25" },
    { id: "gb-7", name: "Christmas Day", date: "2025-12-25" },
    { id: "gb-8", name: "Boxing Day", date: "2025-12-26" }
  ],
  // More countries can be added as needed
};

export { FALLBACK_COUNTRIES, FALLBACK_HOLIDAYS };