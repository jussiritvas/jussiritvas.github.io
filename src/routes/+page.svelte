<script>
    import Waves from '$lib/components/Waves.svelte';

</script>
<body>
    <div class="landing-page">
        <div class="title">
            <h1>Welcome to Jussi's web home</h1>
            <p>This page contains some information about me!</p>
        </div>
        <div class="about-me">
            <h2>About Me</h2>
            <p>I'm a software developer specializing in deep technologies. For the past 3 years I've been working in the industry of Quantum Computing.</p>
            <p>In my work free time, I enjoy exploring new programming languages, reading about different technologies and lately I've been also getting into Game Development.</p>

            <h2>Technologies</h2>
            <h3>Tech Stack</h3>
            <p>The following list contains some of the technologies that I am proficient with and some that I would like to work with in the future.</p>
            
            <ul class="tech-grid">
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go">
                    <span>Go</span>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python">
                    <span>Python</span>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" alt="Rust">
                    <span>Rust</span>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript">
                    <span>JavaScript</span>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte">
                    <span>Svelte</span>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" alt="Godot">
                    <span>Godot</span>
                </li>
            </ul>

            <h3>Concepts</h3>
            <p>
                Even though I have worked as a fullstack developer and enjoy it, I am looking in the future to combine my expertise with runtime optimisation together with complex distributed systems.
            </p>
            <p>
                I believe many deeptech companies will have quite interesting software problems in the future. Fields that I would 
                like to work with are Quantum Computing, Biomedical Companies or anything related to Satellites.
            </p>



            <h3>Tooling</h3>
                <ul class="tech-grid">
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker">
                        <span>Docker</span>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
                        <span>Git</span>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="Grafana">
                        <span>Grafana</span>
                    </li>
                    <li>
                        <img src="https://grafana.com/static/img/logos/logo-loki.svg" alt="Loki">
                        <span>Loki</span>
                    </li>
                    <li>
                        <img src="https://grafana.com/static/assets/img/blog/tempo.png" alt="Tempo">
                        <span>Tempo</span>
                    </li>
                    <li>
                        <img src="https://grafana.com/static/img/logos/logo-mimir.svg" alt="Mimir">
                        <span>Mimir</span>
                    </li>
                </ul>

            <h2>Experience</h2>
            <div class="experience-item">
                <div class="experience-header">
                    <h3>IQM Quantum Computers</h3>
                    <span class="experience-date">10.2024-Present</span>
                </div>
                <p class="experience-description">
                    I've been working on the lower level of our software stack. When I say lower level I mean the part where circuit is transformed from gates to pulses, transferred over the wire and the pulse playlists are distributed to the correct hardware and executed.
                    <br>
                    I am very excited for what's coming in this part of the stack when we go towards fault-tolerant quantum computing.
                    <br>
                    I believe also that this part of the stack contains very interesting software problems that need to be solved.
                </p>
            </div>
            <div class="experience-item">
                <div class="experience-header">
                    <h3>Netlight Consulting</h3>
                    <span class="experience-date">06.2022-10.2024</span>
                </div>
                <p class="experience-description">Worked as a software consultant at a Finnish quantum computing company :]</p>
            </div>
            <div class="experience-item">
                <div class="experience-header">
                    <h3>Clozeta</h3>
                    <span class="experience-date">05.2020-02.2022</span>
                </div>
                <p class="experience-description">
                    Founded a company with 2 friends. I was the sole technical person in the company. Our company was a online clothing rental platform where consumers had access to an unlimited wardrobe by monthly subscription or by one-time rentals.
                    <br>
                    I created the platform using JAMStack architecture, relying on headless CMS and Stripe. I was proud that there
                    was no downtime during the whole two years and the user feedback was really great. During Covid years we also 
                    pivoted towards another product `Clozeta Preloved`, which I was able to program in 3 months.



                </p>
            </div>
            <div class="experience-item">
                <div class="experience-header">
                    <h3>Nokia</h3>
                    <span class="experience-date">11.2019-12.2020 & 10.2021 - 05.2022</span>
                </div>
                <p class="experience-description">
                    Worked as a trainee and afterwards as a permanent specialist in the SoC R&D department <br>
                    My work consisted mainly of programming <a href="https://en.wikipedia.org/wiki/Application-specific_instruction_set_processor">ASIP</a>'s that were able to handle FFT & iFFT efficiently and implementing a state machine based on properties of the signals.
                </p>

            </div>
            <div class="experience-item">
                <div class="experience-header">
                    <h3>Aalto University</h3>
                    <span class="experience-date">2019-2020</span>
                </div>
                <p class="experience-description">
                    Teaching assistant in the following courses:
                </p>

                    <ul>
                        <li>
                            <a href="https://ppc.cs.aalto.fi/ack/"> Programming Parallel Computers</a>
                        </li>
                        <li>
                            <a href="https://sisu.aalto.fi/student/courseunit/aalto-CU-1150972844-20240801/brochure"> Programming Studio A</a>
                        </li>
                    </ul>
            </div>

        </div>
    </div>
</body>


<Waves />

<style>

    body {
        line-height: 1.5;
        background-color: var(--color-bg);
        font-family: var(--font-mono);
        font-size: 87.5%;
        -webkit-font-smoothing: antialiased;

        padding-top: calc(var(--padding) * 3);
        padding-bottom: calc(var(--padding) * 3);
        padding-left: calc(var(--padding) * 4);
        padding-right: calc(var(--padding) * 4);
        /* margin: 0 auto; */
        max-width: var(--max-width);
    }
    :root {
        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --font-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

        --padding: 1rem;
        --margin: 1rem;

        --color-bg: rgb(245, 245, 235);
        --color-bg-secondary: #fdfdfd7e;
        --color-dark: #000;
        --color-accent: #e0bc4e;

        --color-text: #000;
        --color-link: #0202b1;

        --max-width: 60rem;
    }


    .title {
        margin-top: 20vh;
        text-align: center;
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
        background-color: var(--color-bg-secondary);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 70rem;
    }

    .about-me h2 {
        margin-top: 4rem;
        /* text-align: center; */
    }


    .tech-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        list-style: none;
        padding: 0;
        margin: 2rem 0;
    }

    .tech-grid li {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .tech-grid li:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .tech-grid img {
        width: 60px;
        height: 60px;
        margin-bottom: 0.5rem;
    }

    .tech-grid span {
        font-size: 0.9rem;
        color: var(--color-text);
        font-weight: 500;
    }

    .experience-item {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.experience-item:last-child {
    border-bottom: none;
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
}

.experience-header h3 {
    margin: 0;
    flex: 1;
}

.experience-date {
    font-style: italic;
    color: var(--color-text);
    opacity: 0.7;
    font-size: 0.9rem;
    white-space: nowrap;
    margin-left: 1rem;
}


</style>

