<template>
    <div class="qd-contents-wrap dashboardview dark">
        <div class="qd-contents contents-view ">
            <div class="contents__head">
                <h2 class="contents__head__title">newtest</h2>
                <button type="button" class="qd-btn btn-primary">대시보드 저장</button>
            </div>

            <div class="contents__body">
                <!-- <div id="DASHBOARDBODY"></div> -->
                <!-- 기본차트영역 -->
                <div class="chart-area">
                    <div class="chart-area__head">
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
                    <div class="chart-area__body">
                        차트표시영역
                    </div>
                </div>

                <!-- 선택된 기본차트영역 -->
                <div class="chart-area is-selected">
                    <div class="chart-area__head">
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
                    <div class="chart-area__body">
                        차트표시영역
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>