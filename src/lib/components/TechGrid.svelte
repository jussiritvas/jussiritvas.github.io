<script>
    export let technologies = [];
    export let title = "";
</script>

{#if title}
    <h3>{title}</h3>
{/if}

<ul class="tech-grid">
    {#each technologies as tech}
        <li>
            <img src={tech.icon} alt={tech.alt}>
            <span>{tech.name}</span>
        </li>
    {/each}
</ul>

<style>
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

    @media (max-width: 1024px) {
        .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    }
</style>