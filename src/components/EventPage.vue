<template>
<!-- Events Page -->
<div class="eventPage">

    <!-- Stream Area -->
    <div class="liveStream">

        <!-- Stream Side -->
        <div class="left">
            
            <!-- Live Screen -->
            <div id="screen">
                <img src="../assets/blackScreen.jpg" alt="sample screen" width="100%" height="540">
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
                    <div id="inner">
                        <p>Views</p>
                        <p>Share</p>
                    </div>
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

        <!-- Title -->
        <div class="title">
            <h2>Merhandise</h2>
        </div>

        <!-- Row -->
        <div class="row">
            <!-- One Product Card -->
            <div class="card">
                <div class="item">
                    <img src="/assets/" alt="shirt">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>
            </div>
            <!-- One Product Card -->
            <div class="card">
                <div class="item">
                    <img src="/assets/" alt="shirt">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>
            </div>
            <!-- One Product Card -->
            <div class="card">
                <div class="item">
                    <img src="/assets/" alt="shirt">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>
            </div>
            <!-- One Product Card -->
            <div class="card">
                <div class="item">
                    <img src="/assets/" alt="shirt">
                    <p>Item Name</p>
                    <p>Price</p>
                </div>
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
        height: 1000px;
    }
    
    .liveStream{
        display: inline-block;
        margin-bottom: 40px;
        width: 100%;
        min-height: 540px;

        .left{
            float: left;
            width: 70%;

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
                    
                    #inner{
                        float: right;
                    }
                }
            }
        }

        .liveChat{
            float: right;
            width: 30%;

            color: black;
        }

    }

    .merch{
        width: 100%;

        .row{
            display: flex;
            justify-content: space-between;
        
            .card{
                width: 23%;
                border: 1px solid;
                padding: 10px;
                box-shadow: 5px 10px;

                .item{
                    width: 100%;
                }
            }
        }
    }

</style>