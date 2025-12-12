<script>
    import Waves from '$lib/components/Waves.svelte';
    import HeroSection from '$lib/components/HeroSection.svelte';
    import TechGrid from '$lib/components/TechGrid.svelte';
    import ExperienceSection from '$lib/components/ExperienceSection.svelte';
    import { techStack, tooling } from '$lib/data/technologies.js';
</script>

<div class="page-container">
    <div class="landing-page">
        <HeroSection />
        
        <div class="about-me">
            <h2>About Me</h2>
            <p>I'm a software developer specializing in deep technologies. For the past 3 years I've been working in the industry of Quantum Computing.</p>
            <p>In my work free time, I enjoy exploring new programming languages, reading about different technologies and lately I've been also getting into Game Development.</p>

            <h2>Technologies</h2>
            <TechGrid technologies={techStack} title="Tech Stack" />
            <p>The following list contains some of the technologies that I am proficient with and some that I would like to work with in the future.</p>

            <h3>Concepts</h3>
            <p>Even though I have worked as a fullstack developer and enjoy it, I am looking in the future to combine my expertise with runtime optimisation together with complex distributed systems.</p>
            <p>I believe many deeptech companies will have quite interesting software problems in the future. Fields that I would like to work with are Quantum Computing, Biomedical Companies or anything related to Satellites.</p>

            <TechGrid technologies={tooling} title="Tooling" />

            <ExperienceSection />
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
    }

    .page-container {
        padding-top: calc(1rem * 3);
        padding-bottom: calc(1rem * 3);
        padding-left: calc(1rem * 4);
        padding-right: calc(1rem * 4);
        max-width: 60rem;
        margin: 0 auto;
    }

    .landing-page {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-me {
        margin-top: 8rem;
        padding: 2rem;
        background-color: rgba(190, 170, 130, 0.2);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0.2, 0.3, 0.4, 0.3);
        max-width: 70rem;
    }

    .about-me h2 {
        margin-top: 4rem;
    }

    @media (max-width: 1024px) {
        .page-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .landing-page {
            height: auto;
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

        .about-me h3 {
            font-size: 1.2rem;
        }
    }
</style>