export function isLeap(year: number): boolean {
  
  if (year % 100 == 0) {
    if (year % 400 == 0){
      return true;
    }
  } else {
    if (year % 4 == 0) {
      return true;
    }
  }
  return false;
}
