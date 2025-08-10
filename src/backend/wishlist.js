const KEY = (userId) => `wishlist:${userId}`;

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

export const listWishlistForUser = (userId) => read(userId);

export const toggleWishlistForUser = (userId, item) => {
  const list = read(userId);
  const exists = list.find((x) => x.id === item.id);
  let updated;
  if (exists) {
    updated = list.filter((x) => x.id !== item.id);
  } else {
    updated = [{ ...item, _localId: crypto.randomUUID() }, ...list];
  }
  write(userId, updated);
  return updated;
};
