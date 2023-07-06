<script>
  import {fade} from 'svelte/transition';

  let visible = false;

  export let text;

  const width = `${text.length / 2.5}em`;
</script>

<style>
  .tooltip {
    position: relative;
  }
  .tooltip-text {
    display: inline-block;
    width: auto;
    max-width: 25vw;
    padding: 0.2em 0.3em;
    border-radius: 0.4em;
    text-align: center;
    position: absolute;
    background-color: darkslategray;
    left: 50%;
    bottom: calc(100% + 0.75em);
    transform: translateX(-50%);
    z-index: 1;
  }
</style>

<div class="tooltip" role="tooltip"
     on:mouseover={() => {visible = true}}
     on:focus={() => {visible = true}}
     on:mouseout={() => {visible = false}}
     on:blur={() => {visible = false}}>
  <slot></slot>
  {#if visible}
    <span class="tooltip-text" style="min-width: {width}"
          transition:fade>{text}</span>
  {/if}
</div>
