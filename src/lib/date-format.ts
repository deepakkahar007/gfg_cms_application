import { parse, format } from "date-fns";

export const parseDate = (date: string | Date) => {
  if (typeof date === "string") {
    const parsedDateFromString = parse(date, "dd-MMM-yyyy", new Date());

    const formattedDate = format(parsedDateFromString, "dd-MMM-yyyy");

    return formattedDate;
  }

  return format(date, "dd-MMM-yyy");
};
