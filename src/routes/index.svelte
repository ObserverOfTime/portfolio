<script>
  import * as config from '../config';
  import Main from '../components/Main';
  import Sidebar from '../components/Sidebar';
</script>

<style>
  @font-face {
    font-family: 'Fira Sans';
    src: url('fonts/FiraSans-Regular.woff') format('woff');
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
  :global(#sapper) {
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
</style>

<svelte:head>
  <title>{config.info.name} - Portfolio</title>
</svelte:head>

<Sidebar info="{config.info}" links="{config.links}"/>
<Main repos="{config.repos}"/>
