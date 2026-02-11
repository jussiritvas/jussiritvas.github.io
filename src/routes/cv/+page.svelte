<script>
    import pdfFile from '$lib/assets/resume.pdf';

    // Optional: many browsers honor these (Chrome/Edge often do); harmless if ignored.
    const pdfPath = `${pdfFile}#toolbar=0&navpanes=0&scrollbar=0`;
</script>

<div class="cv-container">
    <div class="actions">
        <a href={pdfFile} target="_blank" rel="noreferrer" class="secondary-btn">Open in new tab</a>
        <a href={pdfFile} download class="download-btn">Download PDF</a>
    </div>

    <div class="pdf-shell">
        <object
            data={pdfPath}
            type="application/pdf"
            aria-label="CV PDF viewer"
            class="pdf-object"
        >
            <p class="pdf-fallback">
                Your browser can’t display PDFs inline.
                <a href={pdfFile} target="_blank" rel="noreferrer">Open the PDF</a>
                or
                <a href={pdfFile} download>download it</a>.
            </p>
        </object>
    </div>
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
        justify-content: flex-end;
        gap: 0.75rem;
    }

    .download-btn,
    .secondary-btn {
        padding: 0.5rem 1rem;
        border-radius: 6px;
        text-decoration: none;
        color: inherit;
        font-family: inherit;
        transition: background-color 0.2s ease, border-color 0.2s ease;
        border: 1px solid rgba(190, 170, 130, 0.35);
        background-color: rgba(190, 170, 130, 0.25);
    }

    .download-btn:hover,
    .secondary-btn:hover {
        background-color: rgba(190, 170, 130, 0.45);
        border-color: rgba(190, 170, 130, 0.6);
    }

    .pdf-shell {
        border: 1px solid rgba(190, 170, 130, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: rgba(245, 245, 235, 0.6);
    }

    .pdf-object {
        width: 100%;
        height: 85vh;
        display: block;
        border: 0;
    }

    .pdf-fallback {
        padding: 1rem;
        margin: 0;
    }
</style>