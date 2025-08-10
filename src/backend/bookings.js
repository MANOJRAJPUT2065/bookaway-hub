const KEY = (userId) => `bookings:${userId}`;

const read = (userId) => {
  try {
    const raw = localStorage.getItem(KEY(userId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const write = (userId, data) => {
  localStorage.setItem(KEY(userId), JSON.stringify(data));
};

export const listBookingsForUser = (userId) => read(userId);

export const addBookingForUser = (userId, booking) => {
  const list = read(userId);
  list.unshift({ ...booking, _localId: crypto.randomUUID() });
  write(userId, list);
  return list;
};
