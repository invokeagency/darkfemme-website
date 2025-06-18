<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  color: var(--text-primary);
  letter-spacing: 0.5px;
  line-height: 1.6;
  background: linear-gradient(135deg,
    var(--dark-purple) 0%,
    var(--rich-aubergine) 50%,
    var(--crimson-dark) 100%
  );
}

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

/* Global link styles */
a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

/* Global button styles */
button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

button:focus {
  outline: none;
}
</style>
