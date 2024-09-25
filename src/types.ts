export type EventResponse = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type Edge = {
  node: EventResponse;
};
