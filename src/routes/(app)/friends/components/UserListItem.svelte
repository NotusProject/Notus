<script>
    let {username, avatar="",span, children}= $props()
</script>

<li class="relative flex justify-between gap-x-6  py-5 ">
    <div class="flex min-w-0 gap-x-4">
        <img alt="" class="h-12 w-12 flex-none rounded-md ring-2 ring-teal-500  ring-opacity-75" src="{avatar}">
        <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-200">
                {username}
            </p>
            <div class="mt-1 flex text-xs leading-5 text-gray-500">

                <div class=" flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <p class="text-xs leading-5 text-gray-500">{span}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex shrink-0 items-center gap-x-4">
        <div class="hidden sm:flex gap-4 sm:items-end">
            {@render children()}
        </div>
    </div>
</li>