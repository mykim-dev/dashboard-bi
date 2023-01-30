<template>
    <div class="qd-container">
        <layoutMenu />
        <main class="qd-main">
            <layoutTop />
            <router-view />
        </main>
    </div>
</template>

<script>
import layoutTop from '@/layout/top.vue';
import layoutMenu from '@/layout/menu.vue';

export default {
    components: { layoutTop, layoutMenu},
    computed: {
    }
}
</script>