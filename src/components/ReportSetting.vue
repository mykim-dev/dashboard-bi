<template>
    <div class="qd-contents-aside" :class="toggleRightPanel">
        <div class="qd-contents-aside__header">
            <strong class="head-title">리포트 만들기</strong>
            <div class="head-ctrl">
                <button type="button" class="qd-btn btn-secondary">저장</button>
                <button type="button" class="qd-icon-btn icon-close" @click="closeRightPanel"></button>
            </div>
        </div>
        <div class="qd-contents-aside__main">
            <div class="qd-tab">
                <div class="qd-tab__bar">
                    <button data-target="tab-chart" @click="changeTab" :class="{'is-selected': selectTabContent === 'tab-chart'}">Chart</button>
                    <button data-target="tab-option" @click="changeTab" :class="{'is-selected': selectTabContent === 'tab-option'}">Option</button>
                    <button data-target="tab-data" @click="changeTab" :class="{'is-selected': selectTabContent === 'tab-data'}">Data</button>
                </div>

                <div v-if="selectTabContent === 'tab-chart'" class="tab-chart qd-tab__content" >
                    <ReportSettingChart />
                </div>
                <div v-else-if="selectTabContent === 'tab-option'" class="tab-chart qd-tab__content" >
                    <ReportSettingOption />
                </div>
                <div v-else-if="selectTabContent === 'tab-data'" class="tab-chart qd-tab__content" >
                    <ReportSettingData />
                </div>
            </div>
        </div>

        <button type="button" class="toggle-contents-aside" @click="changeRightPanel"><font-awesome-icon icon="fas fa-angle-double-left" /></button>
    </div>
</template>

<script>
import ReportSettingChart from '@/components/ReportSettingChart.vue'
import ReportSettingOption from '@/components/ReportSettingOption.vue'
import ReportSettingData from '@/components/ReportSettingData.vue'

export default {
    name: 'ReportSetting',
    data() {
		return {
			toggleRightPanel: '', // 1단보기: open-right-panel, 2단보기: expand-right-panel
            selectTabContent: 'tab-chart'
		}
	},
	components: {
		ReportSettingChart,
        ReportSettingOption,
        ReportSettingData
	},
    methods: {
		changeRightPanel() {
			this.toggleRightPanel = (this.toggleRightPanel === '') ? 'expand-right-panel' : '';
		},
        closeRightPanel() {
			this.toggleRightPanel = 'close-right-panel';
		},
        changeTab(e) {
            this.selectTabContent = e.target.getAttribute('data-target');
        }
    }
}
</script>