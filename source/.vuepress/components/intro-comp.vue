<template>
    <div class="intro">
        <div v-for="el in list" class="item" @click="goto(el.link)">
            <h2>{{ el.h2 }}</h2>
            <p>{{ el.p }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    h2: '奥运普及',
                    p: '冬奥普及相关政策、专利成果、研究报告、专著、论文成果、其他成果及媒体报道。',
                    link: '/doc/olympics',
                },
                {
                    h2: '场馆建设',
                    p: '冬奥场馆建设相关政策、专利成果、研究报告、专著、论文成果、其他成果及媒体报道。',
                    link: '/doc/venue',
                },
                {
                    h2: '高水平训练',
                    p: '高水平训练相关政策、专利成果、研究报告、专著、论文成果、其他成果及媒体报道',
                    link: '/doc/train',
                },
                {
                    h2: '赛事运营',
                    p: '冬奥赛事运营相关政策、专利成果、研究报告、专著、论文成果、其他成果及媒体报道。',
                    link: '/doc/operate',
                },
            ],
        }
    },
    methods: {
        goto(link) {
            location.href = link;
        }
    }
}
</script>
<style>
.intro {
    margin-top: 60px;
    border-top: 1px solid #ddd;
}
.intro h2 {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    padding-bottom: 0;
    color: #3a5169;
}
.intro  p {
    color: #4e6e8e;
    padding: 0 0 1em 0;
}
.intro .item {
    display: inline-block;
    width: 49%;
    cursor: pointer;
}
.intro .item:hover h2,
.intro .item:hover p
 {
    color: #f30;
    opacity: 0.8;
    text-decoration: underline;
}
</style>