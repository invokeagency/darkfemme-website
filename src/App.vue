<template>
  <div class="app">
    <div class="content-container">
      <div class="content-wrapper">
        <div class="hero-section">
          <h1 class="brand-name">DARK FEMME</h1>
          <div class="accent-line"></div>
          <h2 class="power-text">Your power awaits.</h2>
          <div class="store-buttons">
            <button class="store-button">
              <span class="store-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              <div class="store-text">
                <span class="store-label">Download on the</span>
                <span class="store-name">App Store</span>
              </div>
            </button>
            <button class="store-button">
              <span class="store-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </span>
              <div class="store-text">
                <span class="store-label">Get it on</span>
                <span class="store-name">Google Play</span>
              </div>
            </button>
            <a href="mailto:nickiamnot@gmail.com" class="store-button">
              <span class="store-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </span>
              <div class="store-text">
                <span class="store-name"></span>
                <span class="store-name">Contact Us</span>
              </div>
            </a>
          </div>
        </div>
        
        <div class="features-section">
          <div class="feature-card">
            <div class="feature-icon">
              <span class="icon-moon">◗</span>
            </div>
            <h3>Daily Mystique</h3>
            <p>Transform your life with daily practices</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="icon-crown">◈</span>
            </div>
            <h3>Premium Coaching</h3>
            <p>Access personalized guidance</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="icon-star">✧</span>
            </div>
            <h3>Structured Learning</h3>
            <p>Master the art of feminine energy</p>
          </div>
        </div>
      </div>
      
      <footer>
        <div class="footer-content">
          <p class="footer-text">© {{ currentYear }} Dark Femme. All rights reserved.</p>
          <div class="footer-links">
            <a href="#" class="footer-text">Privacy Policy</a>
            <a href="#" class="footer-text">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
:root {
  /* Darker color palette */
  --deep-noir: #080808;
  --dark-purple: #130912;
  --rich-aubergine: #220821;
  --crimson-dark: #380808;
  --crimson-accent: #8B1A1A;
  --text-primary: rgba(255, 255, 255, 0.87);
  --text-secondary: rgba(255, 255, 255, 0.6);
  --text-muted: rgba(255, 255, 255, 0.4);
  --card-bg: rgba(15, 8, 15, 0.6);
  --card-border: rgba(255, 255, 255, 0.08);
}

/* Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: var(--ivory);
  letter-spacing: 0.5px;
  line-height: 1.6;
}

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  background: linear-gradient(135deg,
    var(--dark-purple) 0%,
    var(--rich-aubergine) 50%,
    var(--crimson-dark) 100%
  );
}

.content-container {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2vh 2rem;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4vh;
}

/* Hero Section */
.hero-section {
  text-align: center;
}

.brand-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--crimson-accent);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.power-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.8rem;
  font-weight: 300;
  color: var(--text-primary);
  margin: 1.5rem 0;
  letter-spacing: 0.5px;
}

.accent-line {
  width: 30px;
  height: 1px;
  background: var(--crimson-accent);
  margin: 1.5rem auto;
  opacity: 0.8;
}

/* Buttons */
.store-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.store-button, .contact-button {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--text-primary);
  color: var(--deep-noir);
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
}

.contact-button {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--text-muted);
}

.store-button:hover, .contact-button:hover {
  transform: translateY(-1px);
}

.store-button:hover {
  opacity: 0.9;
}

.contact-button:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-primary);
}

.store-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
}

.store-label {
  font-size: 0.7rem;
  opacity: 0.8;
}

.store-name {
  font-size: 1.1rem;
  font-weight: 500;
}

.store-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Features Section */
.features-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1rem;
}

.feature-card {
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--card-border);
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  opacity: 0.9;
}

.feature-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* Footer */
footer {
  padding: 2vh 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.8rem;
}

.footer-links a:hover {
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .content-container {
    padding: 2vh 1rem;
  }
  
  .power-text {
    font-size: 2rem;
  }
  
  .features-section {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .store-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .store-button, .contact-button {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1vh;
  }
}

.footer-text {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;
}

.footer-text:hover {
  color: var(--text-primary);
}
</style>
