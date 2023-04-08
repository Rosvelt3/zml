<template>
    <nav class="bg-dark text-light py-3.5">
        <div class="container flex flex-row justify-between items-center">
            <h1 class="text-xl">ZML</h1>
            <ul class="flex flex-row items-center gap-6">
                <li>
                    <NuxtLink to="/login">
                        <Button tabindex="-1">
                            <div class="i-solar-login-2-linear text-xl"></div>
                            <span>Log In</span>
                        </Button>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/create">
                        <Button tabindex="-1">
                            <div class="i-solar-add-circle-linear text-xl"></div>
                            <span>New League</span>
                        </Button>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
