<script>
    import Arrow from '$lib/components/Arrow.svelte';
    import pixelme from '$lib/assets/me-in-pixel.png';
</script>

<div class="title">
    <h1>Welcome to my web page!</h1>
    <img src={pixelme} alt="Pixel me" class="pixel-image">
    <Arrow />
</div>

<style>
    .pixel-image {
        display: none;
        position: absolute;
        bottom: 0;
        left: 1rem;
        width: 100px;
        height: auto;
        z-index: 10;
    }

    .title {
        margin-top: 20vh;
        text-align: center;
        position: relative;
    }

    @media (max-width: 1024px) {
        .pixel-image {
            display: block;
            width: 80px;
        }

        .title {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 0;
            text-align: center;
        }

        .title h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }

        @media (max-width: 640px) {
        .pixel-image {
            display: block;
            width: 80px;
        }

        .title {
            height: 85vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 0;
            text-align: center;
        }

        .title h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
</style>