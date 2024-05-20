<script lang="ts">
    import {Icon} from '@steeze-ui/svelte-icon';

    let {
        label,
        placeholder = 'you@example.com',
        type = '',
        icon,
        value = $bindable(),
        children,
        ...rest
    } = $props();
</script>

<div>
    {#if label !== '' && label !== undefined}
        <label for="{label ? 'input': 'input'}" class="block text-sm font-medium leading-6 text-white">{label}</label>
    {/if}
    <div class="relative mt-2 rounded-md shadow-sm">
        {#if icon}
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                {@render children()}
            </div>
        {/if}
        <input
                {...rest}
                bind:value={value}
                class="block w-full rounded-md bg-transparent border-0 py-3 md:py-1.5 pl-10 text-white ring-1 ring-inset {rest.class} ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:bg-gray-300/5 hover:bg-gray-300/5 sm:text-sm sm:leading-6"
                placeholder="{placeholder}"
                type="{type}"
        >
    </div>
</div>