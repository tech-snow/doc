<template>
    <div class="intro">
        <h1 id="main-title">科技与冰雪运动相互支撑发展数据库</h1>
        <lottie-animation />
        <div style="text-align: center;">
            <a href="/doc/olympics.html" class="nav-link action-button">立即查看</a>
        </div>
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
                    p: '高水平训练相关政策、专利成果、研究报告、专著、论文成果、其他成果及媒体报道。',
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
h1 {
    font-size: 3em;
    text-align: center;
    margin: 0;
}
.action-button {
    margin: 10px auto 60px;
    border-radius: 50px;
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: rgba(255,51,0,0.8);
    padding: 0.8rem 1.6rem;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(230,46,0,0.8);
}
.action-button:hover {
    background-color: rgba(255,71,26,0.8);
}
.intro h2 {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    padding-bottom: 0;
    color: #3a5169;
}
.intro  p {
    color: #4e6e8e!important;
    padding: 0 1em 0 0;
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