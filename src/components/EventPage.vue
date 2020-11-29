<template>
<!-- Events Page -->
<div class="eventPage">

    <!-- Stream Area -->
    <div class="liveStream">

        <!-- Stream Side -->
        <div class="left">
            <div id="screen">
                <img src="../assets/blackScreen.jpg" alt="sample screen" width="960" height="540">
            </div>
            <div class="details">
            </div>
        </div>

        <!-- Chat Side -->
        <div class="liveChat">
            <p>dont know how to apply live chaat</p>
        </div>
    </div>

    <!-- Merch Area -->
    <div class="merch">
        <div class="title">
        <div class="item">
            <img src="/assets/" alt="shirt">
            <p>Item Name</p>
            <p>Price</p>
        </div>
        </div>
    </div>
</div>
</template>


<script>
  
</script>


<style lang="scss" scoped>
    
    .eventPage{
        margin: 30px 60px 0px 60px;
    }
    
    .liveSteam{
        margin-bottom: 60px;
        display: inline-block;

        .left{
            position: absolute;
            width: 960px;
            height: 540px;
            left: 194px;
            top: 176px;
        }

        .liveChat{
            position: absolute;
            width: 536px;
            height: 540px;
            left: 1256px;
            top: 176px;
        }

    }

</style>