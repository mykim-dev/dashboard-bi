<template>
    <div class="qd-contents dashboardview">
        <div class="qd-contents-container contents-view dark">
            <div class="contents__header">
                <h2 class="contents__header__title">NewTest DashBoard</h2>
                <button type="button" class="qd-icon-btn btn-download"><font-awesome-icon icon="fa-solid fa-download" /></button>
            </div>

            <div class="contents__main">
                <!-- 타이틀 영역 -->
                <div class="title-area" style="position:absolute;top:20px;left:20px;">
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-less-than-equal" /></i>
                    <strong>compared to the</strong>
                </div>

                <!-- 차트영역 -->
                <div class="chart-area" style="width:180px;height:100px;position:absolute;top:60px;left:20px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Previous day</strong>
                        </div>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <div class="chart-area" style="width:180px;height:100px;position:absolute;top:60px;left:220px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Last week</strong>
                        </div>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <div class="chart-area" style="width:180px;height:100px;position:absolute;top:60px;left:420px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Last Moth</strong>
                        </div>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <div class="chart-area" style="width:180px;height:100px;position:absolute;top:60px;left:620px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Last year</strong>
                        </div>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <!-- 타이틀 영역 -->
                <div class="title-area" style="position:absolute;top:200px;left:20px;">
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-arrow-trend-up" /></i>
                    <strong>summary</strong>
                </div>

                <!-- 차트영역 -->
                <div class="chart-area" style="width:380px;height:280px;position:absolute;top:240px;left:20px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Current situation</strong>
                        </div>
                        <p>Downtrend detected</p>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <!-- 차트영역 -->
                <div class="chart-area" style="width:380px;height:280px;position:absolute;top:240px;left:420px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Current situation</strong>
                        </div>
                        <p>Downtrend detected</p>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <!-- 타이틀 영역 -->
                <div class="title-area" style="position:absolute;top:20px;left:840px;">
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-less-than-equal" /></i>
                    <strong>compare</strong>
                </div>

                <!-- 차트영역 -->
                <div class="chart-area" style="width:480px;height:460px;position:absolute;top:60px;left:840px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Current situation</strong>
                        </div>
                        <p>Downtrend detected</p>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <!-- 차트영역 -->
                <div class="chart-area" style="width:480px;height:460px;position:absolute;top:60px;left:1340px;">
                    <div class="chart-area__header">
                        <div class="tool-bar">
                            <strong class="tool-bar__title">Current situation</strong>
                        </div>
                        <p>Downtrend detected</p>
                    </div>
                    <div class="chart-area__main">
                    </div>
                </div>

                <!-- 타이틀 영역 -->
                <div class="title-area" style="position:absolute;top:560px;left:20px;">
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-bars-staggered" /></i>
                    <strong>List</strong>
                </div>

                <!-- 표 영역 -->
                <div class="list-area" style="width:1800px;position:absolute;top:600px;left:20px;">
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

            <div class="contents__footer">
                <ul class="qd-tags">
                    <li class="qd-tags__item is-selected">
                        <a href="">대시보드1</a>
                        <button type="button" class="qd-icon-btn"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                    </li>
                    <li class="qd-tags__item">
                        <a href="">대시보드2</a>
                        <button type="button" class="qd-icon-btn"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                    </li>
                    <li class="qd-tags__item">
                        <a href="">대시보드3</a>
                        <button type="button" class="qd-icon-btn"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'dashboardview',
    data() {
		return {
		}
	},
	components: {
	},
	methods: {
	}
}
</script>