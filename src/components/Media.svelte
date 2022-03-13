<script>
    import {onMount} from 'svelte';

    let mql, listener, mounted, matches;

    const removeListener = () => {
      if (mql && listener) mql.removeListener(listener);
    };

    const addListener = (query) => {
      mql = window.matchMedia(query);
      listener = (q) => {matches = q.matches};
      mql.addEventListener('change', listener);
      matches = mql.matches;
    };

    onMount(() => {
      mounted = true;
      return removeListener;
    });

    export let query;

    $: {
      if (mounted) {
        removeListener();
        addListener(query);
      }
    }
</script>

<slot {matches}></slot>
