<template>
    <div class="qd-wrap">
        <layoutMenu />
        <div class="qd-container">
            <layoutTop />
            <router-view />
        </div>
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