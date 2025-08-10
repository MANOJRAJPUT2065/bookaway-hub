import { Helmet } from "react-helmet-async";
import Hero from "../components/booking/Hero";
import FeaturedDestinations from "../components/booking/FeaturedDestinations";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>BookAway Hub — Hotel & Travel Bookings</title>
        <meta
          name="description"
          content="Book hotels, resorts, and stays worldwide with BookAway Hub. Compare deals and book in minutes."
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="BookAway Hub — Hotel & Travel Bookings" />
        <meta property="og:description" content="Book hotels, resorts, and stays worldwide with BookAway Hub." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BookAway Hub",
              url: "/",
              potentialAction: {
                "@type": "SearchAction",
                target: "/search?destination={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Helmet>
      <Hero />
      <FeaturedDestinations />
    </main>
  );
};

export default Index;
