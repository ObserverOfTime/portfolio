<script>
  import Tooltip from './Tooltip';
  export let icon, href, title;
</script>

<style>
  a {
    color: inherit;
    outline: none;
    text-decoration: none;
  }
  .icon {
    height: 1.5em;
    width: 1.5em;
  }
</style>

<Tooltip text={title}>
  <a {href} target="_blank" name="i-{icon}" rel="noopener">
    <svg class="icon i-{icon}">
      <use href="#i-{icon}"/>
    </svg>
    <slot></slot>
  </a>
</Tooltip>
