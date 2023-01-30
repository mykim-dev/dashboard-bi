<template>
    <div class="qd-popup">
        <div class="popup" style="width:500px;">
            <div class="popup__header">
                <strong><i class="qd-icon"><font-awesome-icon icon="fa-solid fa-filter" /></i> Measure Filter</strong>
                <button type="button" class="qd-icon-btn icon-close"></button>
            </div>
            <div class="popup__main">
                <ul class="qd-form">
                    <li class="qd-form__item">
                        <div class="qd-form__item-title">Column : </div>
                        <div class="qd-form__item-con">Bronze</div>
                    </li>
                    <li class="qd-form__item">
                        <div class="qd-form__item-title">Ranges : </div>
                        <div class="qd-form__item-con">
                            <select id="select1" class="qd-select">
                                <option>통계 막대 차트</option>
                            </select>
                            <button type="button" class="qd-btn btn-secondary">Enter value</button>
                        </div>
                    </li>
                </ul>
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
            <div class="popup__footer">
                <button type="reset" class="qd-btn btn-cancel">Cancel</button>
                <button type="button" class="qd-btn btn-primary">Apply</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup'
}
</script>