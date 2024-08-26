export function monthsPassed(startMonth: string, startYear: number, endMonth: string, endYear: number): string {
  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  // Validate input
  if (!(startMonth in monthMap) || !(endMonth in monthMap)) {
    throw new Error('Invalid month name');
  }
  if (startYear > endYear || (startYear === endYear && monthMap[startMonth] > monthMap[endMonth])) {
    throw new Error('End date must be after start date');
  }

  // Convert month names to numbers
  const startMonthNumber = monthMap[startMonth];
  const endMonthNumber = monthMap[endMonth];

  // Calculate the total number of months passed including the starting month
  const totalMonthsPassed = (endYear - startYear) * 12 + (endMonthNumber - startMonthNumber + 1);

  // Calculate years and remaining months
  const years = Math.floor(totalMonthsPassed / 12);
  const remainingMonths = totalMonthsPassed % 12;

  // Construct the output string
  return [
    years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '',
    remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : '',
  ]
    .filter(Boolean)
    .join(' ');
}
