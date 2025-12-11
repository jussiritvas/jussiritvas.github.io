<script>
    import { experiences } from '$lib/data/experience.js';
</script>

<h2>Experience</h2>
{#each experiences as experience}
    <div class="experience-item">
        <div class="experience-header">
            <h3>{experience.company}</h3>
            <span class="experience-date">{experience.period}</span>
        </div>
        <p class="experience-description">
            {#each experience.description.split('\n') as paragraph}
                {paragraph}<br>
            {/each}
        </p>
    </div>
{/each}

<style>
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

    @media (max-width: 768px) {
        .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
        }

        .experience-date {
            margin-left: 0;
            font-size: 0.8rem;
        }

        .experience-description {
            font-size: 0.9rem;
            line-height: 1.4;
        }
    }
</style>