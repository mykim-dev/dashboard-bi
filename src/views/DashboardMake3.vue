<template>
    <div class="qd-contents dashboardmake">
        <div class="qd-contents-container contents-make ">
            <div class="contents__header">
                <button type="button" class="toggle-contents__header" @click="toggleContentsHeadSetting">
                    <i class="qd-icon">
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 0.486328C9.3424 0.486328 8.77045 0.907907 7.62654 1.75107L5.90637 3.01897C5.72617 3.1518 5.63606 3.21821 5.53933 3.27406C5.44259 3.32991 5.34003 3.37474 5.1349 3.46439L5.13489 3.46439L3.17677 4.32014C1.87462 4.88922 1.22354 5.17375 0.894821 5.74311C0.566102 6.31247 0.645223 7.01859 0.803465 8.43082L1.04142 10.5545C1.06635 10.777 1.07882 10.8882 1.07882 10.9999C1.07882 11.1116 1.06635 11.2228 1.04142 11.4453L0.803465 13.569C0.645223 14.9812 0.566102 15.6873 0.894821 16.2567C1.22354 16.826 1.87462 17.1106 3.17677 17.6797L5.13489 18.5354L5.13493 18.5354C5.34004 18.6251 5.4426 18.6699 5.53933 18.7257C5.63606 18.7816 5.72617 18.848 5.90637 18.9808L7.62654 20.2487C8.77045 21.0919 9.3424 21.5135 9.99984 21.5135C10.6573 21.5135 11.2292 21.0919 12.3731 20.2487L14.0933 18.9808L14.0933 18.9808C14.2735 18.848 14.3636 18.7816 14.4604 18.7257C14.5571 18.6699 14.6597 18.6251 14.8648 18.5354L16.8229 17.6797C18.1251 17.1106 18.7761 16.826 19.1049 16.2567C19.4336 15.6873 19.3545 14.9812 19.1962 13.569L18.9583 11.4453C18.9333 11.2228 18.9209 11.1116 18.9209 10.9999C18.9209 10.8882 18.9333 10.777 18.9583 10.5545L19.1962 8.43082C19.3545 7.01859 19.4336 6.31247 19.1049 5.74311C18.7761 5.17375 18.1251 4.88922 16.8229 4.32014L14.8648 3.46439L14.8648 3.46438C14.6596 3.37474 14.5571 3.32991 14.4604 3.27406C14.3636 3.21821 14.2735 3.1518 14.0933 3.01897L12.3731 1.75107C11.2292 0.907907 10.6573 0.486328 9.99984 0.486328ZM9.99984 14.9992C12.2086 14.9992 13.9992 13.2087 13.9992 10.9999C13.9992 8.79113 12.2086 7.00057 9.99984 7.00057C7.79107 7.00057 6.00051 8.79113 6.00051 10.9999C6.00051 13.2087 7.79107 14.9992 9.99984 14.9992Z" fill="#387EE5" />
                        </svg>
                    </i> 대시보드 정보
                </button>

                <h2 class="contents__header__title">newtest</h2>
                <button type="button" class="qd-btn btn-primary btn-save">대시보드 저장</button>

                <div class="contents__header__setting" :class="{'is-open': isContentsHeadSetting}">
                    <ul class="qd-form">
                        <li class="qd-form__item">
                            <div class="qd-form__item-title">이름</div>
                            <div class="qd-form__item-con">
                                <input type="text" class="qd-text" placeholder="Please input" />
                            </div>
                        </li>
                        <li class="qd-form__item">
                            <div class="qd-form__item-title">테마</div>
                            <div class="qd-form__item-con">
                                <select id="select1" class="qd-select">
                                    <option>basic</option>
                                </select>
                            </div>
                        </li>
                        <li class="qd-form__item">
                            <div class="qd-form__item-title">갱신주기</div>
                            <div class="qd-form__item-con">
                                <input type="text" class="qd-text" placeholder="Please input" />
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

                    <button type="button" class="qd-btn" disabled>다른이름으로 저장</button>
                    <!-- <button type="button" class="btn-secondary">다른이름으로 저장</button> -->
                </div>
            </div>

            <div class="contents__main">
                <!-- <div id="DASHBOARDBODY"></div> -->

                <!-- 타이틀 영역 -->
                <div class="title-area" style="position:absolute;top:20px;left:20px;">
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-arrow-trend-up" /></i>
                    <strong>summary</strong>
                </div>

                <!-- 기본차트영역 -->
                <div class="chart-area" style="width:300px;height:300px;position:absolute;top:60px;left:20px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Chart Title</strong>
                            <div class="tool-bar__ctrl">
                                <button type="button"><i class="qd-icon icon-edit"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i></button>
                                <button type="button"><i class="qd-icon icon-copy"><font-awesome-icon icon="fa-solid fa-copy" /></i></button>
                                <button type="button"><i class="qd-icon icon-delete"><font-awesome-icon icon="fa-solid fa-trash-can" /></i></button>
                            </div>
                        </div>
                        <p>Chart Description are displayed here</p>
                    </div>
                    <div class="chart-area__main">
                        차트표시영역
                    </div>
                </div>

                <!-- 선택된 기본차트영역 -->
                <div class="chart-area is-selected" style="width:300px;height:300px;position:absolute;top:60px;left:340px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Chart Title</strong>
                            <div class="tool-bar__ctrl">
                                <button type="button"><i class="qd-icon icon-edit"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i></button>
                                <button type="button"><i class="qd-icon icon-copy"><font-awesome-icon icon="fa-solid fa-copy" /></i></button>
                                <button type="button"><i class="qd-icon icon-delete"><font-awesome-icon icon="fa-solid fa-trash-can" /></i></button>
                            </div>
                        </div>
                        <p>Chart Description are displayed here</p>
                    </div>
                    <div class="chart-area__main">
                        차트표시영역
                    </div>
                </div>

                <!-- 타이틀 영역 -->
                <div class="title-area" style="position:absolute;top:400px;left:20px;">
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-bars-staggered" /></i>
                    <strong>List</strong>
                </div>

                <!-- 표 영역 -->
                <div class="list-area" style="width:1200px;position:absolute;top:440px;left:20px;">
                    <div class="qd-list">
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Title</th>
                                    <th>Title</th>
                                    <th>Title</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Contents</td>
                                    <td>Link type</td>
                                    <td>Contents</td>
                                    <td>Contents</td>
                                    <td>Contents</td>
                                </tr>
                                <tr>
                                    <td>Contents</td>
                                    <td>Link type</td>
                                    <td>Contents</td>
                                    <td>Contents</td>
                                    <td>Contents</td>
                                </tr>
                                <tr>
                                    <td>Contents</td>
                                    <td>Link type</td>
                                    <td>Contents</td>
                                    <td>Contents</td>
                                    <td>Contents</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        <ReportSetting id="REPORTINFO" msg="Welcome dashboard" />
    </div>
</template>

<script>
// @ is an alias to /src
import ReportSetting from '@/components/ReportSetting3.vue'

export default {
    name: 'dashboardmake',
    data() {
		return {
			isContentsHeadSetting: false
		}
	},
	components: {
		ReportSetting
	},
	methods: {
		toggleContentsHeadSetting() {
			this.isContentsHeadSetting = this.isContentsHeadSetting ? false : true;
		}
	}
}
</script>