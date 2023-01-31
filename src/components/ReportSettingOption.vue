<template>
    <div class="area-group">
        <div class="area-item">
            <dl class="qd-accordion-switch">
                <dt>
                    <strong>툴팁</strong>
                    <label for="switch1" class="qd-switch">
                        <input type="checkbox" id="switch1" />
                    </label>
                </dt>
                <dd>
                    툴팁 내용
                </dd>
            </dl>

            <dl class="qd-accordion-switch is-open">
                <dt>
                    <strong>범례</strong>
                    <label for="switch2" class="qd-switch">
                        <input type="checkbox" id="switch2" checked />
                    </label>
                </dt>
                <dd>
                    <ul class="qd-form">
                        <li class="qd-form__item">
                            <div class="qd-form__item-title">범례 위치</div>
                            <div class="qd-form__item-con">
                                <select id="select1" class="qd-select">
                                    <option>Top left</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </dd>
            </dl>

            <dl class="qd-accordion-switch is-open">
                <dt>
                    <strong>축</strong>
                    <label for="switch3" class="qd-switch">
                        <input type="checkbox" id="switch3" checked />
                    </label>
                </dt>
                <dd>
                    <ul class="qd-form">
                        <li class="qd-form__item">
                            <div class="qd-form__item-title">
                                <label for="" class="qd-checkbox">
                                    <input type="checkbox" id="" checked /> X축 제목
                                </label>
                            </div>
                            <div class="qd-form__item-con">
                                <input type="text" class="qd-text" />
                            </div>
                        </li>
                        <li class="qd-form__item">
                            <div class="qd-form__item-title">
                                <label for="" class="qd-checkbox">
                                    <input type="checkbox" id="" checked /> Y축 제목
                                </label>
                            </div>
                            <div class="qd-form__item-con">
                                <input type="text" class="qd-text" />
                            </div>
                        </li>
                        <li class="qd-form__item">
                            <div class="qd-form__item-con">
                                <label for="" class="qd-checkbox">
                                    <input type="checkbox" id="" checked /> X축 그리드 표시
                                </label>
                            </div>
                        </li>
                        <li class="qd-form__item">
                            <div class="qd-form__item-con">
                                <label for="" class="qd-checkbox">
                                    <input type="checkbox" id="" checked /> Y축 그리드 표시
                                </label>
                            </div>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        <div class="area-item">
            <dl class="qd-accordion-switch">
                <dt>
                    <strong>레이블</strong>
                    <label for="switch4" class="qd-switch">
                        <input type="checkbox" id="switch4" />
                    </label>
                </dt>
                <dd>
                </dd>
            </dl>
            <dl class="qd-accordion-switch is-open">
                <dt>
                    <strong>색상</strong>
                    <label for="switch5" class="qd-switch">
                        <input type="checkbox" id="switch5" checked />
                    </label>
                </dt>
                <dd>
                    <div class="chart-color-set">
                        <label for="radio5" class="qd-radio">
                            <input type="radio" name="chartcolor" id="radio5" checked />Color theme 1 (Pastel color mix)
                        </label>
                        <div class="chart-color-list color-theme1">
                            <i v-for="(color, idx) in colorTheme1" :key='idx' :style="{ backgroundColor: color }"></i>
                        </div>
                    </div>

                    <div class="chart-color-set">
                        <label for="radio6" class="qd-radio">
                            <input type="radio" name="chartcolor" id="radio6" checked />Color theme 2 (Blue, for Dark Mode)
                        </label>
                        <div class="chart-color-list color-theme2 is-selected">
                            <i v-for="(color, idx) in colorTheme2" :key='idx' :style="{ backgroundColor: color }"></i>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReportSettingOption',
    data() {
		return {
            colorTheme1: ['#FFB672','#FFDAB8','#FFC24C','#FD8F2A','#4AD4C4','#A4E9E1','#7BF39C','#20C8B4','#70A4F0','#B7D1F7','#DF4343','#FE4545','#FFD1D1','#FFA4A4','#E5E5E5','#F1F1F1','#C1C1C1','#8C8C8C','#0F4CA6','#3278DE'],
            colorTheme2: ['#BAD6FF','#B6BDFF','#808CFF','#3549FF','#9CEEFF','#62D1E9','#7AECDF','#00B09C','#70A4F0','#5390E9','#5200FF','#6923FF','#864EFD','#9AA0FF','#E5E5E5','#F1F1F1','#dcdcdc','#c1c1c1','#0F4CA6','#2070E5']
		}
	},
    methods: {
    }
}
</script>