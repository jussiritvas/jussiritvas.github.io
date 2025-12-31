<script>
    import Waves from '$lib/components/Waves.svelte';
    import HeroSection from '$lib/components/HeroSection.svelte';
    import TechGrid from '$lib/components/TechGrid.svelte';
    import ExperienceSection from '$lib/components/ExperienceSection.svelte';
    import { techStack, tooling } from '$lib/data/technologies.js';
</script>

<div class="page-container">
    <div class="hero-row">
        <HeroSection />
    </div>
    
    <div class="about-me">
        <h2>About Me</h2>
        <p>I'm a software developer specializing in deep technologies. For the past three years, I've been working in the quantum computing industry.</p>
        <p>In my free time, I enjoy exploring new programming languages, reading about emerging technologies, and lately I've also been getting into game development.</p>

        <h2>Technologies</h2>
        <p>The list below includes technologies I'm proficient with, as well as others I'd like to work with in the future.</p>
        
        <TechGrid technologies={techStack} title="Tech Stack" />
        <h3>Concepts</h3>
        <p>Although I've worked as a full-stack developer (and enjoy it), I'm looking to combine my expertise in runtime optimization with complex distributed systems.</p>
        <p>I believe many deep-tech companies will face fascinating software problems in the coming years. Fields I'd love to work in include quantum computing, biomedical companies, and satellite-related technology.</p>

        <TechGrid technologies={tooling} title="Tooling" />

        <ExperienceSection />
    </div>

    <div class="blog-section">
        <h2>Blog Posts</h2>
        <div class="blog-grid">
            <a href="#" class="blog-card">
                <span>Coming Soon</span>
            </a>
            <a href="#" class="blog-card">
                <span>Coming Soon</span>
            </a>
        </div>
        <div class="refs">
            <h2>Refs</h2>
            <div class="blog-grid">
                <a href="#" class="blog-card">
                    <span>Coming Soon</span>
                </a>
            </div>

        </div>
    </div>
</div>

<Waves />

<style>
    /* Move only the global styles and layout styles here */
    :global(body) {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        background-color: rgba(245, 245, 235, 0.898);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 87.5%;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    .refs {
        margin-top: 2rem;
    }

    .page-container {
        padding-top: calc(1rem * 3);
        padding-bottom: calc(1rem * 3);
        padding-left: calc(1rem * 4);
        padding-right: calc(1rem * 4);
        max-width: 100rem;
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: start;
    }

    .hero-row {
        grid-column: 1 / -1;
        width: 100%;
    }

    .about-me {
        margin-top: 0;
        padding: 2rem;
        background-color: rgba(190, 170, 130, 0.2);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0.2, 0.3, 0.4, 0.3);
        max-width: 70rem;
    }

    .about-me h2 {
        margin-top: 4rem;
    }

    .blog-section {
        padding: 2rem;
        background-color: rgba(190, 170, 130, 0.2);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0.2, 0.3, 0.4, 0.3);
        height: fit-content;
        position: sticky;
        top: 3rem;
    }

    .blog-section h2 {
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    .blog-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .blog-card {
        aspect-ratio: 1;
        background-color: rgba(190, 170, 130, 0.3);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .blog-card:hover {
        background-color: rgba(190, 170, 130, 0.5);
        transform: scale(1.02);
    }

    .blog-card span {
        font-size: 0.9rem;
        opacity: 0.7;
    }

    @media (max-width: 1024px) {
        .page-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            grid-template-columns: 1fr;
            gap: 0;
        }

        .hero-row {
            order: 1;
        }

        .about-me {
            order: 2;
        }

        .blog-section {
            order: 3;
            position: static;
            margin-top: 2rem;
        }

        .about-me {
            margin-top: 0;
            padding: 1.5rem;
            max-width: none;
            width: 100%;
            box-sizing: border-box;
        }

        .about-me h2 {
            margin-top: 2rem;
            font-size: 1.5rem;
        }


        .about-me p {
            text-align: justify;
            hyphens: auto;
            -webkit-hyphens: auto;
            word-break: break-word;
        }

        .about-me h3 {
            font-size: 1.2rem;
        }
    }
</style>