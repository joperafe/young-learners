"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Dynamically import Map component with SSR disabled
const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <div style={{ height: '400px', background: '#f0f0f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading map...</div>
});

// CSS styles as JavaScript object to bypass Tailwind issues
const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  },
  header: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "16px 0",
  },
  headerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#002b5c",
  },
  nav: {
    display: "flex",
    gap: "32px",
  },
  navButton: {
    color: "#666666",
    background: "none",
    border: "none",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  hero: {
    paddingTop: "120px",
    paddingBottom: "80px",
    background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)",
    textAlign: "center" as const,
  },
  heroContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 16px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#002b5c",
    marginBottom: "24px",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#b51c2c",
    marginBottom: "16px",
  },
  description: {
    fontSize: "24px",
    color: "#666666",
    marginBottom: "24px",
  },
  date: {
    fontSize: "20px",
    color: "#333333",
    marginBottom: "32px",
  },
  button: {
    backgroundColor: "#b51c2c",
    color: "white",
    border: "none",
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  section: {
    padding: "80px 0",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#002b5c",
    textAlign: "center" as const,
    marginBottom: "48px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "32px",
    marginTop: "48px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  },
  cardIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#002b5c",
    marginBottom: "12px",
  },
  cardText: {
    color: "#666666",
    lineHeight: "1.6",
  },
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.main}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>IH Braga</div>
          <nav style={styles.nav}>
            <button 
              style={styles.navButton}
              onClick={() => scrollToSection("about")}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#002b5c"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#666666"}
            >
              About
            </button>
            <button 
              style={styles.navButton}
              onClick={() => scrollToSection("highlights")}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#002b5c"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#666666"}
            >
              Highlights
            </button>
            <button 
              style={styles.navButton}
              onClick={() => scrollToSection("map")}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#002b5c"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#666666"}
            >
              Map
            </button>
            <button 
              style={styles.navButton}
              onClick={() => scrollToSection("contact")}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#002b5c"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#666666"}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <h1 style={styles.title}>
            English Young Learners Conference
          </h1>
          <h2 style={styles.subtitle}>
            Braga 2025
          </h2>
          <p style={styles.description}>
            Inspiring Young Minds through English Learning
          </p>
          <p style={styles.date}>
            March 15–16, 2025 | Braga, Portugal
          </p>
          <button 
            style={styles.button}
            onClick={() => scrollToSection("about")}
            onMouseEnter={(e) => (e.target as HTMLElement).style.transform = "scale(1.05)"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.transform = "scale(1)"}
          >
            Join Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About the Conference</h2>
          <p style={{ ...styles.cardText, textAlign: "center", fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
            Join us for two inspiring days dedicated to young English learners in the beautiful city of Braga. 
            Hosted by IH Braga, one of Portugal&apos;s leading English language schools, this event features 
            interactive workshops, inspiring guest speakers, and networking opportunities for teachers and parents alike.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" style={{ ...styles.section, backgroundColor: "#f8f9fa" }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Conference Highlights</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🎯</div>
              <h3 style={styles.cardTitle}>Interactive Workshops</h3>
              <p style={styles.cardText}>
                Hands-on sessions covering modern teaching methodologies and creative classroom activities.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🎤</div>
              <h3 style={styles.cardTitle}>Expert Guest Speakers</h3>
              <p style={styles.cardText}>
                Renowned educators sharing insights on child psychology and language acquisition.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🤝</div>
              <h3 style={styles.cardTitle}>Teacher Networking</h3>
              <p style={styles.cardText}>
                Connect with fellow educators from around the world and share experiences.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🏛️</div>
              <h3 style={styles.cardTitle}>Cultural Immersion</h3>
              <p style={styles.cardText}>
                Explore Braga&apos;s rich history and experience Portuguese culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Explore Braga</h2>
          <Map />
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🏫</div>
              <h3 style={styles.cardTitle}>IH Braga School</h3>
              <p style={styles.cardText}>
                Our main campus where the conference takes place.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🏨</div>
              <h3 style={styles.cardTitle}>Recommended Hotels</h3>
              <p style={styles.cardText}>
                Stay at these nearby accommodations for easy access.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🍽️</div>
              <h3 style={styles.cardTitle}>Local Restaurants</h3>
              <p style={styles.cardText}>
                Experience authentic Portuguese cuisine during your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" style={{ ...styles.section, backgroundColor: "#002b5c", color: "white" }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: "white" }}>Contact Information</h2>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#b51c2c", marginBottom: "16px" }}>IH Braga</h3>
            <p style={{ marginBottom: "8px" }}>R. do Anjo 90, 4700-305 Braga, Portugal</p>
            <p style={{ marginBottom: "8px" }}>Phone: +351 253 123 456</p>
            <p style={{ marginBottom: "16px" }}>Email: conference@ihbraga.com</p>
            <a 
              href="https://www.ihbraga.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#b51c2c", textDecoration: "none" }}
            >
              Visit ihbraga.com →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}