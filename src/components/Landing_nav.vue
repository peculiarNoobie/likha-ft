<template>
    <div class="landing-navbar" :class="{ 'hide-right-items': hideRight }">
        <a id="left" href="#">EVENTS</a>
        <a id="left" href="#">ABOUT US</a>
        <router-link id="right" to="/auth">SIGN UP</router-link>
    </div>
</template>
<script>
export default {
    name: 'LandingNavbar',
    props: {
        hideRight: Boolean
    }
}
</script>
<style lang="scss" scoped>

/* Horizontal Navbar */
.landing-navbar {
    // centered navbar with 80% width
    margin: auto;
    width: 80%;
    padding: 10px 0px;

    // variables for setting the button's height and border.
    // these values will be used to vertically center the elements
    // relative to the button's properties
    $btn-height: 5px;
    $btn-border: 2px;

    // left-side elements
    #left {
        display: inline-block;
        color: #fff;
        margin: 0;
        padding: $btn-height 20px;
        border-bottom: $btn-border solid transparent;

        &:hover {
            color: rgb(255, 121, 116);
            border-bottom: 2px solid rgb(255, 121, 116);
            transition-duration: 0.25s;
        }
    }

    // right-side elements (buttons)
    #right {
        display: block;
        float: right;
        border: $btn-border solid #fff;
        border-radius: 4px;
        padding: $btn-height $btn-height*6;
        color: #fff;

        &:hover {
            $color-on-hover: rgb(255, 121, 116);

            border: 2px solid $color-on-hover;
            background-color: $color-on-hover;
            transition-duration: 0.25s;
        }
    }
}

.hide-right-items {
    #right {
        display: none;
    }
}

</style>
