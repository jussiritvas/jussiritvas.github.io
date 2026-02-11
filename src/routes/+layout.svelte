<script>
	import favicon from '$lib/assets/favicon.ico';
	import apple from '$lib/assets/apple-touch-icon.png'
	import manifest from '$lib/assets/site.webmanifest'
	import Footer from '$lib/components/Footer.svelte';
  	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={apple} />
	<link rel="manifest" href={manifest}>

</svelte:head>

{@render children()}
<Footer />
