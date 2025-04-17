<!-- src/lib/components/Header.svelte -->
<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let isMenuOpen = false;

  function toggleMenu() {
      isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <nav class="nav-container">
      <button class="burger-menu" on:click={toggleMenu} aria-label="Toggle navigation menu">
          <span class:active={isMenuOpen}></span>
          <span class:active={isMenuOpen}></span>
          <span class:active={isMenuOpen}></span>
      </button>
      <ul class="nav-links" class:open={isMenuOpen}>
          <li>
              <a 
                  href="/" 
                  class:active={$page.url.pathname === '/'}
                  aria-current={$page.url.pathname === '/' ? 'page' : undefined}
                  on:click={() => (isMenuOpen = false)}
                  class="cutive-mono-regular"
              >
                  Main Page
              </a>
          </li>
          <li>
              <a 
                  href="/blog" 
                  class:active={$page.url.pathname === '/blog'}
                  aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}
                  on:click={() => (isMenuOpen = false)}
                  class="cutive-mono-regular"
              >
                  Blog
              </a>
          </li>
          <li>
              <a 
                  href="/cv" 
                  class:active={$page.url.pathname === '/cv'}
                  aria-current={$page.url.pathname === '/cv' ? 'page' : undefined}
                  on:click={() => (isMenuOpen = false)}
                  class="cutive-mono-regular"
              >
                  CV
              </a>
          </li>
      </ul>
  </nav>
</header>

<style>
  .nav-container {
      padding: 1rem 2rem;
      background-color: #cfd2d115;
      border-bottom: 1px solid #e9ecef;
      position: relative;
  }

  .nav-links {
      list-style: none;
      display: flex;
      gap: 4rem;
      margin: 0;
      padding: 0;
      justify-content: center;
  }

  .nav-links li {
      margin: 0;
  }

  a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      transition: color 0.2s ease;
  }

  a:hover {
      color: #0f6f33;
  }

  a.active {
      color: #413f3f;
      border-bottom: 2px solid #37353578;
  }

  .burger-menu {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1000;
  }

  .burger-menu span {
      display: block;
      width: 25px;
      height: 3px;
      background: #333;
      margin: 5px 0;
      transition: all 0.3s ease;
  }

  .burger-menu span.active:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
  }

  .burger-menu span.active:nth-child(2) {
      opacity: 0;
  }

  .burger-menu span.active:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
      .nav-container {
          padding: 0rem 0rem;
      }

      .burger-menu {
          display: block;
          position: absolute;
          top: 1rem;
          right: 1rem;
      }

      .nav-links {
          display: none;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #ffffff;
          padding: 1rem;
          border-bottom: 1px solid #e9ecef;
          z-index: 999;
      }

      .nav-links.open {
          display: flex;
      }

      a {
          font-size: 1rem;
          padding: 0.3rem 0.5rem;
      }

      a.active {
          border-bottom: 1px solid #37353578;
      }
  }
</style>