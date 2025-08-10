import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

// Placeholder fetch function (replace with your real API call)
const listBookingsForUser = async (userId) => {
  // Example fetch from your backend (adjust URL)
  const res = await fetch(`/api/bookings?userId=${userId}`);
  if (!res.ok) return [];
  return await res.json();
};

const Bookings = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!userId) return;
    listBookingsForUser(userId).then(setBookings);
  }, [userId]);

  return (
    <main className="container mx-auto px-6 py-10">
      <Helmet>
        <title>My bookings — BookAway Hub</title>
        <meta name="description" content="View your upcoming and past bookings" />
        <link rel="canonical" href="/bookings" />
      </Helmet>
      <h1 className="text-2xl font-semibold mb-6">My bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-muted-foreground">No bookings yet. Start exploring and book your next stay!</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b) => (
            <article key={b._localId || b.id} className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-semibold">{b.title}</h2>
              <p className="text-sm text-muted-foreground">{b.location}</p>
              <p className="text-sm mt-2">{b.from} – {b.to}</p>
              <p className="text-sm">Guests: {b.guests}</p>
              <p className="text-sm mt-2">Booked at: {new Date(b.createdAt).toLocaleString()}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default Bookings;
