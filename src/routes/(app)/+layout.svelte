<script lang="ts">
    import {getContext} from "svelte";
    import type {AuthModel} from "pocketbase";

    let { children } = $props();
    let user = $state<AuthModel>(null);
    $effect(()=>{
         user = getContext('user');
    })
</script>
{#if user}
{@render children()}
    {:else}
    <main>

        <a href="/login" class="login-link">Click me</a>
    </main>


{/if}
<style>
    .login-link {
        color: blue;
        text-decoration: underline;
    }
</style>