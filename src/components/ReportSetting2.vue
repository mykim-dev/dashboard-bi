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
                    <button data-target="#tab-chart">Chart</button>
                    <button data-target="#tab-option" class="is-selected">Option</button>
                    <button data-target="#tab-data">Data</button>
                </div>

                <div id="tab-chart" class="tab-chart qd-tab__content">
                    <div class="area-group">
                        <div class="area-item">
                            <dl class="qd-accordion is-open">
                                <dt>
                                    <strong><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-gear" /></i> 기본정보</strong>
                                    <button type="button" class="qd-icon-btn icon-down"></button>
                                </dt>
                                <dd>
                                    <ul class="qd-form">
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-con">
                                                <fieldset>
                                                    <label for="radio1" class="qd-radio">
                                                        <input type="radio" name="radio1" id="radio1" checked />신규 생성
                                                    </label>
                                                    <label for="radio2" class="qd-radio">
                                                        <input type="radio" name="radio1" id="radio2" /> 기존 선택
                                                    </label>
                                                </fieldset>
                                            </div>
                                        </li>
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-title">작성된 리포트</div>
                                            <div class="qd-form__item-con">
                                                <select id="select1" class="qd-select">
                                                    <option>통계 막대 차트</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-title">리포트 이름</div>
                                            <div class="qd-form__item-con">
                                                <input type="text" class="qd-text" />
                                            </div>
                                        </li>
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-title">설명</div>
                                            <div class="qd-form__item-con">
                                                <textarea class="qd-textarea">통계 막대 차트</textarea>
                                            </div>
                                        </li>
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-title">내보내기</div>
                                            <div class="qd-form__item-con">
                                                <fieldset>
                                                    <label for="checkbox1" class="qd-checkbox">
                                                        <input type="checkbox" id="checkbox1" checked /> Image
                                                    </label>
                                                    <label for="checkbox2" class="qd-checkbox">
                                                        <input type="checkbox" id="checkbox2" />PDF
                                                    </label>
                                                    <label for="checkbox3" class="qd-checkbox">
                                                        <input type="checkbox" id="checkbox3" />Excel
                                                    </label>
                                                    <label for="checkbox4" class="qd-checkbox">
                                                        <input type="checkbox" id="checkbox4" />TEST2
                                                    </label>
                                                    <label for="checkbox5" class="qd-checkbox">
                                                        <input type="checkbox" id="checkbox5" />TEST3
                                                    </label>
                                                </fieldset>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div class="area-item">
                            <dl class="qd-accordion is-open">
                                <dt>
                                    <strong><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-chart-pie" /></i> 차트 유형</strong>
                                    <button type="button" class="qd-icon-btn icon-down"></button>
                                </dt>
                                <dd>
                                    <dl class="qd-accordion-square is-open">
                                        <dt>
                                            <strong>비교</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            <ul class="list-chart-type">
                                                <li>
                                                    <button class="icon-chart bar-horizontal">Bar</button>
                                                    <button class="icon-chart bar-vertical">Bar</button>
                                                    <button class="icon-chart stack-horizontal">Stack</button>
                                                    <button class="icon-chart stack-vertical">Stack</button>
                                                    <button class="icon-chart rader">rader</button>
                                                    <button class="icon-chart rader-stack">Rader Stack</button>
                                                    <button class="icon-chart bubble">bubble</button>
                                                </li>
                                                <li>
                                                    <button class="icon-chart gauge">Gauge</button>
                                                    <button class="icon-chart gauge-bar">Gauge Bar</button>
                                                    <button class="icon-chart gauge-number">Gauge Number</button>
                                                </li>
                                                <li>
                                                    <button class="icon-chart pie">Pie</button>
                                                    <button class="icon-chart pie-donut">Donut</button>
                                                    <button class="icon-chart pie-multi">Multi</button>
                                                    <button class="icon-chart pie-3d">3D</button>
                                                </li>
                                                <li>
                                                    <button class="icon-chart line">Line</button>
                                                    <button class="icon-chart spline">Spline</button>
                                                    <button class="icon-chart line-area">Line Area</button>
                                                    <button class="icon-chart spline-area">Spline Area</button>
                                                    <button class="icon-chart area-stack">Area Stack</button>
                                                </li>
                                                <li>
                                                    <button class="icon-chart icon-text-left">(L)icon & text</button>
                                                    <button class="icon-chart icon-text-right">(R)icon & text</button>
                                                    <button class="icon-chart icon-text-top">(T)icon & text</button>
                                                    <button class="icon-chart icon-text-bottom">(B)icon & text</button>
                                                    <button class="icon-chart timer">Timer</button>
                                                    <button class="icon-chart text">Text</button>
                                                    <button class="icon-chart grid">Grid</button>
                                                </li>
                                                <li>
                                                    <button class="icon-chart map-world">World Map</button>
                                                    <button class="icon-chart map-s-korea">S-korea Map</button>
                                                    <button class="icon-chart link-text">Text Link</button>
                                                    <button class="icon-chart link-node">Node Link</button>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>카드</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            카드
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>편차</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            편차
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>비율</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            비율
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>분산</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            분산
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>Composition</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            Composition
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>Filters</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            Filters
                                        </dd>
                                    </dl>

                                    <dl class="qd-accordion-square">
                                        <dt>
                                            <strong>Miscellaneous</strong>
                                            <button type="button" class="qd-icon-btn icon-plus"></button>
                                        </dt>
                                        <dd>
                                            Filters
                                        </dd>
                                    </dl>

                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div id="tab-option" class="tab-option qd-tab__content is-selected">
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
                                            <i v-for="color in colorTheme1" :style="{ backgroundColor: color }"></i>
                                        </div>
                                    </div>

                                    <div class="chart-color-set">
                                        <label for="radio6" class="qd-radio">
                                            <input type="radio" name="chartcolor" id="radio6" checked />Color theme 2 (Blue, for Dark Mode)
                                        </label>
                                        <div class="chart-color-list color-theme2 is-selected">
                                            <i v-for="color in colorTheme2" :style="{ backgroundColor: color }"></i>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div id="tab-data" class="tab-data qd-tab__content">
                    <div class="area-group">
                        <div class="area-item data-item">
                            <dl class="qd-accordion is-open">
                                <dt>
                                    <strong><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-database" /></i> 데이터 항목</strong>
                                    <button type="button" class="qd-icon-btn icon-down"></button>
                                </dt>
                                <dd>
                                    <ul class="qd-form">
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-con">
                                                <label for="radio1" class="qd-radio">
                                                    <input type="radio" id="radio1" /> 신규 생성
                                                </label>
                                                <label for="radio2" class="qd-radio">
                                                    <input type="radio" id="radio2" /> 기존 선택
                                                </label>
                                                <div class="qd-form__item-con">
                                                    <select id="select3" class="qd-select">
                                                        <option>Report name</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-title">로지컬 컴포넌트</div>
                                            <div class="qd-form__item-con">
                                                <select id="select4" class="qd-select">
                                                    <option>Data LC</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li class="qd-form__item">
                                            <div class="qd-form__item-title">불러오기</div>
                                            <div class="qd-form__item-con">
                                                <input type="file" class="qd-text" />
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="data-set">
                                        <div class="data-set__header">Measures</div>
                                        <div class="data-set__main">
                                            <div class="qd-search">
                                                <input type="text" placeholder="검색어를 입력해주세요" />
                                                <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                                            </div>
                                            <ul class="list-data">
                                                <li class="list-data__item">
                                                    <div class="list-data__item-name">CategoryID</div>
                                                    <div class="list-data__item-ctrl">
                                                        <button type="button"><font-awesome-icon icon="fa-solid fa-gear" /></button>
                                                        <button type="button" class="icon-close"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="data-set">
                                        <div class="data-set__header">Dimensions</div>
                                        <div class="data-set__main">
                                            <div class="qd-search">
                                                <input type="text" placeholder="검색어를 입력해주세요" />
                                                <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                                            </div>
                                            <ul class="list-data">
                                                <li class="list-data__item">
                                                    <div class="list-data__item-name">CategoryID</div>
                                                    <div class="list-data__item-ctrl">
                                                        <button type="button"><font-awesome-icon icon="fa-solid fa-gear" /></button>
                                                        <button type="button" class="icon-close"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </dd>
                            </dl>
                        </div>
                        <div class="area-item report-item">
                            <dl class="qd-accordion is-open">
                                <dt>
                                    <strong><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-circle-check" /></i> 리포트 항목</strong>
                                    <button type="button" class="qd-icon-btn icon-down"></button>
                                </dt>
                                <dd>
                                    <div class="data-set data-set-column">
                                        <div class="data-set__header">Column</div>
                                        <div class="data-set__main">
                                            <div class="qd-search">
                                                <input type="text" placeholder="검색어를 입력해주세요" />
                                                <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                                            </div>
                                            <ul class="list-data">
                                                <li class="list-data__item">
                                                    <div class="list-data__item-name">CategoryID</div>
                                                    <div class="list-data__item-ctrl">
                                                        <button type="button"><font-awesome-icon icon="fa-solid fa-gear" /></button>
                                                        <button type="button" class="icon-close"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="data-set data-set-value">
                                        <div class="data-set__header">Value</div>
                                        <div class="data-set__main">
                                            <div class="qd-search">
                                                <input type="text" placeholder="검색어를 입력해주세요" />
                                                <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                                            </div>
                                            <ul class="list-data">
                                                <li class="list-data__item">
                                                    <div class="list-data__item-name">CategoryID</div>
                                                    <div class="list-data__item-ctrl">
                                                        <button type="button"><font-awesome-icon icon="fa-solid fa-gear" /></button>
                                                        <button type="button" class="icon-close"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="data-set data-set-filter">
                                        <div class="data-set__header">Filter</div>
                                        <div class="data-set__main">
                                            <div class="qd-search">
                                                <input type="text" placeholder="검색어를 입력해주세요" />
                                                <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                                            </div>
                                            <ul class="list-data">
                                                <li class="list-data__item" :class="isListDataItemSet">
                                                    <div class="list-data__item-name">CategoryID</div>
                                                    <div class="list-data__item-ctrl">
                                                        <button type="button" @click="toggleListDataItemSet"><font-awesome-icon icon="fa-solid fa-gear" /></button>
                                                        <button type="button" class="icon-close"></button>
                                                    </div>

                                                    <div class="list-data__item-set">
                                                        <dl>
                                                            <dt>
                                                                <span><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i> Rename</span>
                                                            </dt>
                                                            <dd>
                                                                <button type="button">None</button>
                                                                <button type="button">Sum</button>
                                                                <button type="button">Count</button>
                                                                <button type="button">Avg</button>
                                                                <button type="button">Max</button>
                                                                <button type="button">Min</button>
                                                                <button type="button">Median</button>
                                                                <button type="button">Distinct Count</button>
                                                                <button type="button">Var</button>
                                                            </dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>
                                                                <span><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-filter" /></i> Filter</span>
                                                                <button type="button" class="qd-icon-btn icon-down"></button>
                                                            </dt>
                                                            <dd>
                                                                <button type="button">
                                                                    <span>Edit</span>
                                                                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-pen" /></i>
                                                                </button>
                                                                <button type="button">
                                                                    <span>Clear</span>
                                                                    <i class="qd-icon icon-close"></i>
                                                                </button>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div class="area-item data-table">
                            <dl class="qd-accordion is-open">
                                <dt>
                                    <strong><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-table-list" /></i> 데이터</strong>
                                    <div>
                                        <button type="button" class="qd-btn">조회</button>
                                        <button type="button" class="qd-icon-btn icon-down"></button>
                                    </div>
                                </dt>
                                <dd>
                                    <div class="qd-list">
                                        <table>
                                            <colgroup>
                                                <col />
                                                <col />
                                                <col />
                                                <col />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>Data</th>
                                                    <th>Legend1</th>
                                                    <th>Legend2</th>
                                                    <th>Legend3</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>data a</td>
                                                    <td>100</td>
                                                    <td>249</td>
                                                    <td>32</td>
                                                </tr>
                                                <tr>
                                                    <td>data a</td>
                                                    <td>100</td>
                                                    <td>249</td>
                                                    <td>32</td>
                                                </tr>
                                                <tr>
                                                    <td>data a</td>
                                                    <td>100</td>
                                                    <td>249</td>
                                                    <td>32</td>
                                                </tr>
                                                <tr>
                                                    <td>data a</td>
                                                    <td>100</td>
                                                    <td>249</td>
                                                    <td>32</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button type="button" class="toggle-contents-aside" @click="changeRightPanel"><font-awesome-icon icon="fas fa-angle-double-left" /></button>
    </div>
</template>

<script>
export default {
    name: 'ReportSetting',
    props: {
        msg: String
    },
    data() {
		return {
			toggleRightPanel: '', // 1단보기: open-right-panel, 2단보기: expand-right-panel
            isListDataItemSet: '',
            colorTheme1: ['#FFB672','#FFDAB8','#FFC24C','#FD8F2A','#4AD4C4','#A4E9E1','#7BF39C','#20C8B4','#70A4F0','#B7D1F7','#DF4343','#FE4545','#FFD1D1','#FFA4A4','#E5E5E5','#F1F1F1','#C1C1C1','#8C8C8C','#0F4CA6','#3278DE'],
            colorTheme2: ['#BAD6FF','#B6BDFF','#808CFF','#3549FF','#9CEEFF','#62D1E9','#7AECDF','#00B09C','#70A4F0','#5390E9','#5200FF','#6923FF','#864EFD','#9AA0FF','#E5E5E5','#F1F1F1','#dcdcdc','#c1c1c1','#0F4CA6','#2070E5']
		}
	},
    methods: {
		changeRightPanel() {
			this.toggleRightPanel = (this.toggleRightPanel === '') ? 'expand-right-panel' : '';
		},
        closeRightPanel() {
			this.toggleRightPanel = 'close-right-panel';
		},
        toggleListDataItemSet() {
            console.log('toggleListDataItemSet');
            this.isListDataItemSet = (this.isListDataItemSet === '') ? 'is-selected' : '';
        }
    }
}
</script>