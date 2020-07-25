import { DateTime, Interval } from "luxon";

const mapDayToWeekday = (day) => {
  const days = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 7,
  };
  return days[day];
};

const mapTimeStringToObject = (timeString) => {
  const split = timeString.split(":");
  return {
    hour: split[0],
    minute: split[1],
    second: split[2],
  };
};

const isContained = (firstTimeRange, secondTimeRange) => {
  if (firstTimeRange.end < firstTimeRange.start) {
    return false;
  }
  return (
    firstTimeRange.start > secondTimeRange.start &&
    firstTimeRange.end < secondTimeRange.end
  );
};

const generateOptions = (openingDays, openingTime, closingTime) => {
  // generate list of possible turns
  const startDate = DateTime.fromObject({ minute: 0 });
  const endDate = startDate.plus({ days: 7 });
  const dateInterval = Interval.fromDateTimes(startDate, endDate);
  const listOfPossibleTurns = dateInterval.splitBy({ minutes: 30 });

  // convert time strings to objects
  const open = mapTimeStringToObject(openingTime);
  const close = mapTimeStringToObject(closingTime);

  const openingWeekdays = openingDays.map((day) => mapDayToWeekday(day));
  const filteredTurns = listOfPossibleTurns.filter((possibleTurn) => {
    // pregunto si la fecha de inicio del intervalo es algun dia de los que abre el negocio
    if (!openingWeekdays.includes(possibleTurn.start.weekday)) {
      return false;
    }
    // pregunto si la hora es entre las horas que abre el negocio
    return isContained(
      { start: possibleTurn.start.hour, end: possibleTurn.end.hour },
      { start: open.hour, end: close.hour }
    );
    // TODO: tambien tengo que preguntar por los turnos ya ocupados en el negocio
  });
  // devuelvo las primeras 30 opciones
  return filteredTurns.slice(0, 30);
};

export { mapDayToWeekday, generateOptions };
