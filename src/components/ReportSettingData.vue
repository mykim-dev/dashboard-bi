<template>
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
</template>

<script>
export default {
    name: 'ReportSetting',    
    data() {
		return {
            isListDataItemSet: ''
		}
	},
    methods: {
        toggleListDataItemSet() {
            console.log('toggleListDataItemSet');
            this.isListDataItemSet = (this.isListDataItemSet === '') ? 'is-selected' : '';
        }
    }
}
</script>