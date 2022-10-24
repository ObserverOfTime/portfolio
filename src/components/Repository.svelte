<script>
  export let repo;
</script>

<style>
  .repo {
    background-color: #303030;
    border-radius: 0.25em;
    padding: 0.5em;
  }
  .repo:not(:last-of-type) {
    margin-bottom: 0.5em;
  }
  .repo-title {
    font-size: large;
    color: cyan;
    word-break: break-word;
  }
  .repo-title:visited {
    color: darkcyan;
  }
  .repo-tags {
    display: flex;
    flex-wrap: wrap;
  }
  .repo-tag {
    padding: 0.1em 0.2em;
    border-radius: 0.25em;
    background-color: darkgreen;
  }
  .repo-tag:not(:last-of-type) {
    margin-right: 0.5em;
  }
  .repo-type {
    font-size: small;
    float: right;
  }
</style>

<section class="repo">
  <!-- svelte-ignore security-anchor-rel-noreferrer -->
  <a class="repo-title" href={repo.url} target="_blank" rel="noopener">
    {repo.name.replace('/', '/\u200b')}
  </a>
  <span class="repo-type">{repo.type}</span>
  <p class="repo-desc">{repo.description}</p>
  <div class="repo-tags">
    {#each repo.tags as tag}
      <span class="repo-tag">{tag}</span>
    {/each}
  </div>
</section>
