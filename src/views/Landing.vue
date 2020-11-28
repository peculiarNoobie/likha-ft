<template>
    <div class="landing">
        <LandingNavbar />
        <div class="welcome">
            <p id="header">Welcome to Katha!</p>
            <p id="body">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <router-link id="signup" to="/auth">SIGN UP</router-link>
        </div>
    </div>
</template>
<script>
import LandingNavbar from '../components/LandingNavbar.vue'

export default {
    name: 'Landing',
    components: {
        LandingNavbar
    }
}
</script>
<style lang="scss" scoped>

.landing {
    min-height: 720px;
    background-color: #444;
}

.welcome {
    margin: 120px auto;
    text-align: center;

    #header {
        font-weight: 700;
        font-size: 48px;
        color: #fff;
    }

    #body {
        width: 40%;
        margin: 0 auto;
        font-weight: 400;
        font-size: 24px;
        color: #fff;
    }

    #signup {
        display: inline-block;
        margin: 60px 0px;
        padding: 10px 40px;
        border-radius: 15px;
        background-color: rgb(230, 92, 92);
        color: #fff;
    }
}

</style>
