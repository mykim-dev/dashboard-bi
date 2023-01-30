<template>
    <nav class="qd-sidebar" :class="toggleSidebar">
        <h1 class="qd-logo">CALS BI</h1>
        <div class="qd-nav">
            <ul class="deaph1">
                <li>
                    <router-link to="/" class="nav-item">
                        <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-house" /></i>
                        <span>홈</span>
                    </router-link>
                </li>
                <li class="is-selected">
                    <router-link to="/dashboardmake" class="nav-item">
                        <i class="qd-icon"><font-awesome-icon icon="fa-regular fa-square-plus" /></i>
                        <span>대시보드 등록</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboardlist" class="nav-item">
                        <i class="qd-icon"><font-awesome-icon icon="fa-regular fa-file-lines" /></i>
                        <span>대시보드 관리</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard" class="nav-item">
                        <i class="qd-icon"><font-awesome-icon icon="fa-regular fa-file-lines" /></i>
                        <span>대시보드 상세</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reportlist" class="nav-item">
                        <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-chart-line" /></i>
                        <span>리포트 관리</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reportmake" class="nav-item">
                        <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-chart-line" /></i>
                        <span>리포트 등록</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <button type="button" class="toggle-sidebar" @click="changeSidebar">
            <font-awesome-icon icon="fas fa-angle-double-left" />
        </button>
    </nav>
</template>

<script>
export default {
    name: 'layoutMenu',
    data() {
        return {
            toggleSidebar: '', // 축소: reduce-sidebar
        }
    },
    methods: {
		changeSidebar() {
			this.toggleSidebar = (this.toggleSidebar === '') ? 'reduce-sidebar' : '';
		}
	}
}
</script>