<template>
    <header class="navebar bg-white dark:bg-bgDark dark:border-b dark:border-primary/10 sticky top-0z-10 shadow-sm">
        <nav class="flex-none lg:hidden">
            <label @click="$emit('toggle-drawer')" class="btn btn-square btn-ghost">
                <icon icon="line-md:close-to-menu-alt-transiton" class="inline-block w-5 h-5"/>
            </label>

        </nav>
        <section class="flex-1">
          <div class="from-control">
            <input type="text" placeholder="Search" class="input input-bordered w-48 ml-2 md:w-out dark:bg-white/5 dark:backdrop-blur-md dark"></input>
          </div>
        </section>
   
    </header>
</template>
<script>


export default {
    components:{
       
    },
    props:[]

}
</script>
