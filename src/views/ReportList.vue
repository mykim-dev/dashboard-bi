<template>
    <div class="qd-contents reportlist">
        <div class="qd-contents-container contents-list">
            <div class="qd-toolbar">
                <h2>
                    <i class="qd-icon"><font-awesome-icon icon="fa-solid fa-bars-staggered" /></i>
                    Report List
                </h2>
                <div class="qd-search">
                    <input type="text" placeholder="검색어를 입력해주세요" />
                    <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                </div>
            </div>

            <div class="qd-list">
                <table>
                    <colgroup>
                        <col style="width: 60px;" />
                        <col style="width: 15%;" />
                        <col style="" />
                        <col style="width: 10%;" />
                        <col style="width: 10%;" />
                        <col style="width: 10%;" />
                        <col style="width: 20%;" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Action</th>
                            <th>Report 이름</th>
                            <th>최근 수정일</th>
                            <th>담당자</th>
                            <th>대시보드 연결 수</th>
                            <th>사용자 대시보드 실행</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-center">1</td>
                            <td class="align-center">
                                <button type="button"><i class="qd-icon icon-edit"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i></button>
                                <button type="button"><i class="qd-icon icon-copy"><font-awesome-icon icon="fa-solid fa-copy" /></i></button>
                                <button type="button"><i class="qd-icon icon-delete"><font-awesome-icon icon="fa-solid fa-trash-can" /></i></button>
                            </td>
                            <td>
                                <a href="#">Report 1</a>
                            </td>
                            <td>2022.05.03</td>
                            <td>홍길동</td>
                            <td class="align-center">1</td>
                            <td class="align-center">
                                <button type="button" class="qd-btn btn-primary">사용자 대시보드 실행</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="align-center">2</td>
                            <td class="align-center">
                                <button type="button"><i class="qd-icon icon-edit"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i></button>
                                <button type="button"><i class="qd-icon icon-copy"><font-awesome-icon icon="fa-solid fa-copy" /></i></button>
                                <button type="button"><i class="qd-icon icon-delete"><font-awesome-icon icon="fa-solid fa-trash-can" /></i></button>
                            </td>
                            <td>
                                <a href="#">Report 2</a>
                            </td>
                            <td>2022.05.03</td>
                            <td>홍길동</td>
                            <td class="align-center">1</td>
                            <td class="align-center">
                                <button type="button" class="qd-btn" disabled>사용자 대시보드 실행</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="align-center">3</td>
                            <td class="align-center">
                                <button type="button"><i class="qd-icon icon-edit"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i></button>
                                <button type="button"><i class="qd-icon icon-copy"><font-awesome-icon icon="fa-solid fa-copy" /></i></button>
                                <button type="button"><i class="qd-icon icon-delete"><font-awesome-icon icon="fa-solid fa-trash-can" /></i></button>
                            </td>
                            <td>
                                <a href="#">Report 3</a>
                            </td>
                            <td>2022.05.03</td>
                            <td>홍길동</td>
                            <td class="align-center">1</td>
                            <td class="align-center">
                                <button type="button" class="qd-btn btn-primary">사용자 대시보드 실행</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>