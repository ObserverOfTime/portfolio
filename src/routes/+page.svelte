<script>
  import * as config from '../config';
  import Main from '$lib/Main';
  import Sidebar from '$lib/Sidebar';
</script>

<style>
  @font-face {
    font-family: 'Fira Sans';
    src: url('/portfolio/fonts/FiraSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  :global(body) {
    margin: 0;
    color: #EEE;
    background-color: #252525;
    font-family: 'Fira Sans', sans-serif;
  }
  :global(ol, ul) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
    padding: 0 0 0.1em;
    font-weight: inherit;
  }
  :global(button) {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }
  :global(p) {
    margin: 0;
    padding: 0.2em 0 0.4em;
  }
  :global(div) { display: unset; }
  :global(:focus) { outline: none; }
  :global(::-moz-focus-inner) { border: 0; }
  :global(*) { box-sizing: border-box; }
  :global(#svelte) {
    display: flex;
    height: 100%;
    min-height: 100vh;
    align-items: stretch;
  }
  :global(#icons) {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
  :global(#sidebar.fullwidth + #main) {
    display: none;
  }
</style>

<svelte:head>
  <meta http-equiv="Last-Modified" content={new Date().toGMTString()}>
  {#if config.info.bio}
    <meta name="description" content={config.info.bio.replaceAll('\n', ' ')}>
    <meta property="og:description" content={config.info.bio.replaceAll('\n', ' ')}>
  {/if}
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary">
  {#if config.links.social.twitter}
    <meta name="twitter:site" content="@{config.links.social.twitter}">
  {/if}
  <meta property="og:image" content={config.url.replace(/\/$/, '/avatar.jpg')}>
  <meta property="og:url" content={config.url}>
  <meta property="og:title" content="Portfolio">
  <meta name="author" content={config.info.name}>
  <title>{config.info.name} - Portfolio</title>
</svelte:head>

<Sidebar info={config.info} links={config.links}/>
<Main repos={config.repos}/>
