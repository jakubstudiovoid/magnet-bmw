export type OpeningState = {
  open: boolean;
  status: string;
  detail: string;
  clock: string;
};

function pragueParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Prague",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return {
    weekday: get("weekday"),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
  };
}

export function getOpeningState(now = new Date()): OpeningState {
  const { weekday, hour, minute } = pragueParts(now);
  const clock = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  const minutes = hour * 60 + minute;
  const openFrom = 9 * 60;
  const openTo = 17 * 60;
  const weekdayOpen = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
  const open = weekdayOpen && minutes >= openFrom && minutes < openTo;

  if (open) {
    return {
      open: true,
      status: "Otevřeno",
      detail: `do 17:00 · ${clock}`,
      clock,
    };
  }

  if (weekday === "Sat") {
    return {
      open: false,
      status: "Sobota",
      detail: "po telefonické dohodě",
      clock,
    };
  }

  if (weekday === "Sun") {
    return {
      open: false,
      status: "Zavřeno",
      detail: "otevíráme v pondělí v 9:00",
      clock,
    };
  }

  if (weekdayOpen && minutes < openFrom) {
    return {
      open: false,
      status: "Zavřeno",
      detail: `otevíráme v 9:00 · ${clock}`,
      clock,
    };
  }

  return {
    open: false,
    status: "Zavřeno",
    detail: `otevíráme zítra v 9:00 · ${clock}`,
    clock,
  };
}
