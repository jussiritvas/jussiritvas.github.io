<!-- src/lib/components/Header.svelte -->
<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
</script>
  
  <header>
    <nav class="nav-container">
      <ul class="nav-links">
        <li>
          <a 
            href="/" 
            class:active={$page.url.pathname === '/'}
            aria-current={$page.url.pathname === '/' ? 'page' : undefined}
          >
            Main Page
          </a>
        </li>
        <li>
          <a 
            href="/mind-index" 
            class:active={$page.url.pathname === '/mind-index'}
            aria-current={$page.url.pathname === '/mind-index' ? 'page' : undefined}
          >
            Mind Index
          </a>
        </li>
        <li>
          <a 
            href="/blog" 
            class:active={$page.url.pathname === '/blog'}
            aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}
          >
            Blog
          </a>
        </li>
        <li>
          <a 
            href="/cv" 
            class:active={$page.url.pathname === '/cv'}
            aria-current={$page.url.pathname === '/cv' ? 'page' : undefined}
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
      background-color: #60c8b315;
      border-bottom: 1px solid #e9ecef;
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
  </style>