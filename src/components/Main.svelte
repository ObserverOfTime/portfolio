<script>
  import Repository from './Repository';
  import Tooltip from './Tooltip';
  export let repos;
</script>

<style>
  :global(#main) {
    height: 100%;
    flex: 0 1 100%;
    padding: 0.25em 0.5em;
  }
  :global(#sidebar.fullwidth + #main) {
    display: none;
  }
  :global(#repos) {
    display: flex;
    flex-direction: column;
  }
</style>

<main id="main">
  <div id="repos">
    {#each repos as repo}
      <Repository {repo}/>
    {/each}
  </div>
</main>
