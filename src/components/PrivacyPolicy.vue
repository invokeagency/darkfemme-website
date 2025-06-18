<template>
  <div class="privacy-policy">
    <div class="nav-header">
      <router-link to="/" class="back-link">← Back to Home</router-link>
    </div>
    <h1 class="main-title">PRIVACY POLICY</h1>

    <div class="content">
      <p>This privacy notice for MintMarketing LLC ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>

      <ul>
        <li>Visit our website at <a href="http://darkfemmeai.com">http://darkfemmeai.com</a> or any website of ours that links to this privacy notice</li>
        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
      </ul>

      <div class="notice-box">
        <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:nickiamnot@gmail.com">nickiamnot@gmail.com</a>.</p>
      </div>

      <section>
        <h2>SUMMARY OF KEY POINTS</h2>
        <ul>
          <li><strong>What personal information do we process?</strong> We do not collect personal information.</li>
          <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
          <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
          <li><strong>How do we process your information?</strong> We do not process information as we do not collect any.</li>
          <li><strong>In what situations and with which parties do we share personal information?</strong> We do not share personal information because we do not collect any.</li>
          <li><strong>How do we keep your information safe?</strong> We are committed to maintaining a secure environment, even though no personal data is collected.</li>
          <li><strong>What are your rights?</strong> Typical privacy rights regarding personal data do not apply as we do not collect information.</li>
          <li><strong>How do you exercise your rights?</strong> Since we do not collect information, there are no specific rights to exercise.</li>
        </ul>
      </section>

      <section>
        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p><strong>In Short:</strong> We do not collect personal information. We operate on a no data collection basis, ensuring that your interactions with us remain private.</p>
      </section>

      <section>
        <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> Since we do not collect personal information, there is no data processing involved.</p>
      </section>

      <section>
        <h2>3. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p><strong>In Short:</strong> We ensure that our platform is secure against unauthorized access, although no personal data is stored.</p>
      </section>

      <section>
        <h2>4. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
      </section>

      <section>
        <h2>5. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> There are no typical privacy rights since we don't collect or store personal data. For questions, please contact us.</p>
      </section>

      <section>
        <h2>6. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws. Changes will be communicated via updates on our website or direct notification.</p>
      </section>

      <section>
        <h2>7. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <div class="contact-info">
          <p><strong>MintMarketing LLC</strong><br>
          75 East 3rd Street<br>
          Sheridan, WY 82801</p>
          <p><strong>Founder:</strong> Nikoloz Zviadadze</p>
          <p><strong>Email:</strong> <a href="mailto:nickiamnot@gmail.com">nickiamnot@gmail.com</a></p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
.privacy-policy {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.privacy-policy::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.nav-header {
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.back-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--crimson-accent);
}

.main-title {
  font-size: 2.5rem;
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.content {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: var(--text-primary);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--card-border);
}

h3 {
  color: var(--text-primary);
  font-size: 1.4rem;
  margin: 2rem 0 1rem;
}

p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

li {
  margin-bottom: 0.5rem;
}

.notice-box {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 6px;
  margin: 2rem 0;
}

.contact-info {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;
}

a {
  color: var(--crimson-accent);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .privacy-policy {
    padding: 1rem;
  }

  .content {
    padding: 1rem;
  }

  .main-title {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }
}
</style> 