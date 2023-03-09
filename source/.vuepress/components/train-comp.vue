<template>
    <div>
        <section v-for="(item, i) in []" :key="item.title">
            <h3 :id="item.title">
                <a :href="`#${item.title}`" class="header-anchor">#</a>
                {{ i+1 }}. {{ item.title.split(' ')[1] }}
            </h3>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>主题</td>
                        <td>{{ item.info[1] }}</td>
                    </tr>
                    <tr>
                        <td>项目名称</td>
                        <td>{{ item.info[3] }}</td>
                    </tr>
                    <tr>
                        <td>项目类型</td>
                        <td>{{ item.info[9] }}</td>
                    </tr>
                    <tr>
                        <td>学科分类</td>
                        <td>{{ item.info[11] }}</td>
                    </tr>
                    <tr>
                        <td>项目负责人</td>
                        <td>{{ item.info[13] }}</td>
                    </tr>
                    <tr>
                        <td>依托单位</td>
                        <td>{{ item.info[15] }}</td>
                    </tr>
                    <tr>
                        <td>项目年份</td>
                        <td>{{ item.info[17] }}</td>
                    </tr>
                    <tr>
                        <td>链接</td>
                        <td>
                            <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.info[23] }}</a >
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr style="margin-bottom: 60px">
        </section>
    </div>
</template>
<script>
import list from '../data/train.js';
console.log(list);
export default {
    data() {
        return {
            list,
        }
    },
    mounted () {
        console.log('demo mounted');
    }
}
</script>