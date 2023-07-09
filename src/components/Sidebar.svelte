<script>
  import {fly} from 'svelte/transition';
  import Media from './Media';
  import Icon from './Icon';

  let show;

  export let info, links;
</script>

<style>
  #sidebar {
    position: static;
    top: 0;
    left: 0;
    flex: 0 0 250px;
    padding: 0.2em 0.5em 0;
    text-align: center;
    border-right: 1px solid #AAA;
  }
  #sidebar.fullwidth {
    border: none;
    flex-basis: 100%;
  }
  #avatar {
    height: auto;
    width: 100%;
    max-width: 230px;
    border-radius: 5%;
    margin: 0.5em auto 0;
  }
  .btn-show {
    width: 1.5em;
    height: 1.5em;
    position: fixed;
    margin: auto 0;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .btn-hide {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 0.25em;
    right: 0.5em;
  }
  .icon {
    width: 100%;
    height: 100%;
  }
</style>

<Media query="(min-width: 700px)" let:matches>
  {#if matches || show}
    <aside id="sidebar" class:fullwidth={show}
           transition:fly={{x: -250, duration: 500}}>
      <h1 id="name">{info.name}</h1>
      <nav id="info">
        <Icon icon="email" href="mailto:{info.email}" title="E-mail"/>
        <Icon icon="resume" href={info.resume} title="Resume"/>
        <Icon icon="homepage" href={info.homepage} title="Homepage"/>
      </nav>
      <article id="bio">{info.bio.trim()}</article>
      <img id="avatar" src="/portfolio/avatar.jpg" alt="Avatar">
      <nav id="social" class="links">
        <h3>Social Platforms</h3>
        {#each links.social as icon}
          <Icon {...icon}/>
        {/each}
      </nav>
      <nav id="vcs" class="links">
        <h3>Version Control Systems</h3>
        {#each links.vcs as icon}
          <Icon {...icon}/>
        {/each}
      </nav>
      <nav id="packages" class="links">
        <h3>Package Registries</h3>
        {#each links.packages as icon}
          <Icon {...icon}/>
        {/each}
      </nav>
      {#if show}
        <button class="btn-hide" title="Hide sidebar"
                tabindex="0" on:click={() => {show = false}}>
          <svg class="icon i-close"><use href="#i-close"/></svg>
        </button>
      {/if}
    </aside>
  {:else}
    <button class="btn-show" title="Show sidebar"
            tabindex="0" on:click={() => {show = true}}>
      <svg class="icon i-arrow"><use href="#i-arrow"/></svg>
    </button>
  {/if}
</Media>
