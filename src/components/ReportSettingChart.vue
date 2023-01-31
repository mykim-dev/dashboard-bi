<template>
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
                            <div class="list-chart-type">
                                <button class="icon-chart bar-horizontal">Bar</button>
                                <button class="icon-chart bar-vertical">Bar</button>
                                <button class="icon-chart stack-horizontal">Stack</button>
                                <button class="icon-chart stack-vertical">Stack</button>
                                <button class="icon-chart rader">rader</button>
                                <button class="icon-chart rader-stack">Rader Stack</button>
                                <button class="icon-chart bubble">bubble</button>
                            </div>
                        </dd>
                    </dl>

                    <dl class="qd-accordion-square is-open">
                        <dt>
                            <strong>카드</strong>
                            <button type="button" class="qd-icon-btn icon-plus"></button>
                        </dt>
                        <dd>
                            <div class="list-chart-type">
                                <button class="icon-chart gauge">Gauge</button>
                                <button class="icon-chart gauge-bar">Gauge Bar</button>
                                <button class="icon-chart gauge-number">Gauge Number</button>
                            </div>
                        </dd>
                    </dl>

                    <dl class="qd-accordion-square is-open">
                        <dt>
                            <strong>편차</strong>
                            <button type="button" class="qd-icon-btn icon-plus"></button>
                        </dt>
                        <dd>
                            <div class="list-chart-type">
                                <button class="icon-chart pie">Pie</button>
                                <button class="icon-chart pie-donut">Donut</button>
                                <button class="icon-chart pie-multi">Multi</button>
                                <button class="icon-chart pie-3d">3D</button>
                            </div>
                        </dd>
                    </dl>

                    <dl class="qd-accordion-square is-open">
                        <dt>
                            <strong>비율</strong>
                            <button type="button" class="qd-icon-btn icon-plus"></button>
                        </dt>
                        <dd>
                            <div class="list-chart-type">
                                <button class="icon-chart line">Line</button>
                                <button class="icon-chart spline">Spline</button>
                                <button class="icon-chart line-area">Line Area</button>
                                <button class="icon-chart spline-area">Spline Area</button>
                                <button class="icon-chart area-stack">Area Stack</button>
                            </div>
                        </dd>
                    </dl>

                    <dl class="qd-accordion-square is-open">
                        <dt>
                            <strong>분산</strong>
                            <button type="button" class="qd-icon-btn icon-plus"></button>
                        </dt>
                        <dd>
                            <div class="list-chart-type">
                                <button class="icon-chart icon-text-left">(L)icon & text</button>
                                <button class="icon-chart icon-text-right">(R)icon & text</button>
                                <button class="icon-chart icon-text-top">(T)icon & text</button>
                                <button class="icon-chart icon-text-bottom">(B)icon & text</button>
                                <button class="icon-chart timer">Timer</button>
                                <button class="icon-chart text">Text</button>
                                <button class="icon-chart grid">Grid</button>
                            </div>
                        </dd>
                    </dl>

                    <dl class="qd-accordion-square is-open">
                        <dt>
                            <strong>Composition</strong>
                            <button type="button" class="qd-icon-btn icon-plus"></button>
                        </dt>
                        <dd>
                            <div class="list-chart-type">
                                <button class="icon-chart map-world">World Map</button>
                                <button class="icon-chart map-s-korea">S-korea Map</button>
                                <button class="icon-chart link-text">Text Link</button>
                                <button class="icon-chart link-node">Node Link</button>
                            </div>
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
</template>

<script>
export default {
    name: 'ReportSettingChart'
}
</script>