<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';

    import pdfFile from '$lib/assets/resume.pdf';
    import Waves from '$lib/components/Waves.svelte';

    let canvasEl;
    let status = 'Loading…';

    let pdfDoc = null;
    let pageNum = 1;
    let pageCount = 0;

    let scale = 1.25;
    const minScale = 0.75;
    const maxScale = 2.5;

    let isRendering = false;
    let pendingRender = null;

    async function renderPage(num) {
        if (!pdfDoc || !canvasEl) return;

        if (isRendering) {
            pendingRender = num;
            return;
        }

        isRendering = true;
        status = `Rendering page ${num}…`;

        try {
            const page = await pdfDoc.getPage(num);
            const viewport = page.getViewport({ scale });

            const ctx = canvasEl.getContext('2d');
            canvasEl.width = Math.floor(viewport.width);
            canvasEl.height = Math.floor(viewport.height);

            const renderTask = page.render({ canvasContext: ctx, viewport });
            await renderTask.promise;

            status = '';
        } catch (e) {
            status = 'Failed to render PDF.';
            console.error(e);
        } finally {
            isRendering = false;
            if (pendingRender !== null) {
                const next = pendingRender;
                pendingRender = null;
                renderPage(next);
            }
        }
    }

    function clampScale(next) {
        return Math.min(maxScale, Math.max(minScale, next));
    }

    async function goPrev() {
        if (!pdfDoc || pageNum <= 1) return;
        pageNum -= 1;
        await renderPage(pageNum);
    }

    async function goNext() {
        if (!pdfDoc || pageNum >= pageCount) return;
        pageNum += 1;
        await renderPage(pageNum);
    }

    async function zoomIn() {
        scale = clampScale(scale + 0.15);
        await renderPage(pageNum);
    }

    async function zoomOut() {
        scale = clampScale(scale - 0.15);
        await renderPage(pageNum);
    }

    async function fitWidth() {
        // Fit to container width (approx), keeping things simple and stable.
        // Uses the current canvas container width and a 1.0-scale viewport measurement.
        if (!pdfDoc) return;
        const container = canvasEl?.parentElement;
        if (!container) return;

        const page = await pdfDoc.getPage(pageNum);
        const v = page.getViewport({ scale: 1.0 });

        const available = container.clientWidth;
        scale = clampScale(available / v.width);
        await renderPage(pageNum);
    }

    onMount(async () => {
        if (!browser) return;

        try {
            const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
            pdfjs.GlobalWorkerOptions.workerSrc = new URL(
                'pdfjs-dist/legacy/build/pdf.worker.mjs',
                import.meta.url
            ).toString();

            const loadingTask = pdfjs.getDocument(pdfFile);
            pdfDoc = await loadingTask.promise;

            pageCount = pdfDoc.numPages;
            pageNum = 1;

            await fitWidth();
        } catch (e) {
            status = 'Failed to load PDF.';
            console.error(e);
        }
    });
</script>

<div class="cv-container">
    <div class="actions">
        <div class="left">
            <button on:click={goPrev} disabled={!pdfDoc || pageNum <= 1}>Prev</button>
            <span class="page-indicator">
                {#if pdfDoc}{pageNum} / {pageCount}{/if}
            </span>
            <button on:click={goNext} disabled={!pdfDoc || pageNum >= pageCount}>Next</button>
        </div>

        <div class="right">
            <button on:click={zoomOut} disabled={!pdfDoc}>-</button>
            <button on:click={zoomIn} disabled={!pdfDoc}>+</button>
            <button on:click={fitWidth} disabled={!pdfDoc}>Fit</button>

            <a href={pdfFile} target="_blank" rel="noreferrer" class="link-btn">Open</a>
            <a href={pdfFile} download class="link-btn primary">Download</a>
        </div>
        <div class="nav">
            <button class="home-btn" type="button" on:click={() => goto('/')}>Home</button>
        </div>
    </div>

    {#if status}
        <div class="status">{status}</div>
    {/if}

    <div class="pdf-shell" aria-label="CV PDF viewer">
        <canvas bind:this={canvasEl} class="pdf-canvas"></canvas>
    </div>
    <Waves />

</div>

<style>
    .cv-container {
        padding: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .actions {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .left,
    .right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .page-indicator {
        opacity: 0.8;
        min-width: 5.5rem;
        text-align: center;
    }

    button {
        padding: 0.45rem 0.65rem;
        border-radius: 6px;
        border: 1px solid rgba(190, 170, 130, 0.35);
        background: rgba(190, 170, 130, 0.25);
        color: inherit;
        font-family: inherit;
        cursor: pointer;
    }

    button:hover:enabled {
        background: rgba(190, 170, 130, 0.45);
        border-color: rgba(190, 170, 130, 0.6);
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .link-btn {
        padding: 0.45rem 0.8rem;
        border-radius: 6px;
        border: 1px solid rgba(190, 170, 130, 0.35);
        background: rgba(190, 170, 130, 0.15);
        text-decoration: none;
        color: inherit;
    }

    .link-btn:hover {
        background: rgba(190, 170, 130, 0.35);
        border-color: rgba(190, 170, 130, 0.6);
    }

    .link-btn.primary {
        background: rgba(190, 170, 130, 0.35);
    }

    .status {
        margin: 0.5rem 0 1rem;
        opacity: 0.85;
    }

    .pdf-shell {
        border: 1px solid rgba(190, 170, 130, 0.3);
        border-radius: 12px;
        overflow: auto;
        background: rgba(245, 245, 235, 0.6);
        padding: 0.75rem;
    }

    .pdf-canvas {
        display: block;
        margin: 0 auto;
        border-radius: 8px;
        background: white;
    }

     .nav {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    .home-btn {
        padding: 0.45rem 0.8rem;
        border-radius: 6px;
        border: 1px solid rgba(190, 170, 130, 0.35);
        background: rgba(190, 170, 130, 0.15);
        color: inherit;
        font-family: inherit;
        cursor: pointer;
        text-decoration: none;
    }

    .home-btn:hover {
        background: rgba(190, 170, 130, 0.35);
        border-color: rgba(190, 170, 130, 0.6);
    }
</style>