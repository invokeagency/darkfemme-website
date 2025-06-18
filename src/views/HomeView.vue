<template>
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
          <router-link to="/privacy-policy" class="footer-text">Privacy Policy</router-link>
          <router-link to="/terms-conditions" class="footer-text">Terms of Service</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2vh 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4vh;
  padding: 4vh 0;
}

.hero-section {
  text-align: center;
}

.brand-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 4px;
  color: var(--crimson-accent);
  margin-bottom: 1rem;
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
  width: 50px;
  height: 2px;
  background: var(--crimson-accent);
  margin: 2rem auto;
  opacity: 0.8;
}

.store-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
}

.store-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.store-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.store-icon svg {
  width: 28px;
  height: 28px;
}

.store-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.3;
}

.store-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.store-name {
  font-size: 1.25rem;
  font-weight: 500;
}

.features-section {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  flex: 1;
  max-width: 300px;
  padding: 2rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  text-align: center;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--crimson-accent);
}

.feature-card h3 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

footer {
  margin-top: auto;
  padding-top: 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid var(--card-border);
}

.footer-text {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: 1.5rem;
}

.footer-text:first-child {
  margin-left: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .content-container {
    padding: 2vh 1rem;
  }

  .power-text {
    font-size: 2rem;
  }

  .features-section {
    flex-direction: column;
    align-items: center;
  }

  .feature-card {
    width: 100%;
    max-width: none;
  }

  .store-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .store-button {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .brand-name {
    font-size: 2rem;
  }

  .store-icon svg {
    width: 24px;
    height: 24px;
  }

  .store-name {
    font-size: 1.1rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }
}
</style> 