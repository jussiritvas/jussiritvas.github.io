<!-- Footer.svelte -->



<script>
    // Define social links
    import {cvData} from '$lib/data/cv';
    const socialLinks = [
      {
        name: "LinkedIn",
        url: cvData.contact.linkedin,
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.132 1.444-2.132 2.936v5.67H9.357V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.258 2.37 4.258 5.457v6.284zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
      },
      {
        name: "Google Scholar",
        url: cvData.contact.scholar,
        icon: "M5 3v18l1.5-.75L8 21l9-9-9-9-1.5.75L5 3zm2 2.414L14.586 13 7 20.586V5.414z"
      }
    ];
  </script>
  
  <footer class="footer">
    <div class="container">
      <div class="social-links">
        {#each socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label={link.name}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="social-icon"
            >
              <path d={link.icon} />
            </svg>
            <span class="link-text">{link.name}</span>
          </a>
        {/each}
      </div>
      <p class="copyright">&copy; {new Date().getFullYear()} {cvData.name}</p>
    </div>
  </footer>
  
  <style>
    .footer {
      background-color: #1a1a1a;
      color: #ffffff;
      padding: 2rem 0;
      width: 100%;
    }
  
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  
    .social-links {
      display: flex;
      gap: 1.5rem;
    }
  
    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #a0a0a0;
      text-decoration: none;
      transition: color 0.3s ease, transform 0.3s ease;
    }
  
    .social-link:hover {
      color: #ffffff;
      transform: translateY(-2px);
    }
  
    .social-icon {
      transition: transform 0.3s ease;
    }
  
    .social-link:hover .social-icon {
      transform: scale(1.1);
    }
  
    .link-text {
      font-size: 1rem;
      font-weight: 500;
    }
  
    .copyright {
      font-size: 0.875rem;
      color: #666;
      margin: 0;
    }
  
    @media (max-width: 768px) {
      .social-links {
        flex-direction: column;
        align-items: center;
      }
  
      .social-link {
        font-size: 1.1rem;
      }
    }
  </style>