<template>
<!-- Events Page -->
<div class="eventPage">

    <!-- Stream Area -->
    <div class="liveStream">

        <!-- Stream Side -->
        <div class="left">
            
            <!-- Live Screen -->
            <div id="screen">
                <img src="../assets/blackScreen.jpg" alt="sample screen" width="960" height="540">
            </div>

            <!-- Live Details -->
            <div class="details">
                <div id="liveTitle">
                        <h3>Event Title</h3>
                </div>

                <!-- Left Side -->
                <div id="artistProfile">
                    <div id="artistLogo">
                        <img src="/logo" alt="logo">
                    </div>
                    <div id="artistInfo">
                        <p>Artist Name</p>
                        <p>Other Deets</p>
                    </div>
                </div>
                
                <!-- Right Side -->
                <div id="iconStuff">
                    <p>Views</p>
                    <p>Share</p>
                </div>
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
    
    .liveStream{
        display: inline-block;
        margin-bottom: 40px;
        width: 100%;
        min-height: 540px;

        .left{
            float: left;
            min-width: 70%;

            .details{
                display: inline-block;
                min-width: 100%;

                #artistProfile{
                    width: 50%;
                    display: inline-block;
                    
                    #artistLogo{
                        width: 10%;
                        float: left;
                    }
                    #artistInfo{
                        width: 90%;
                        float: right;
                    }
                }

                #iconStuff{
                    width: 50%;
                    float: right;
                }
            }
        }

        .liveChat{
            float: right;
            min-width: 30%;

            color: black;
        }

    }

</style>