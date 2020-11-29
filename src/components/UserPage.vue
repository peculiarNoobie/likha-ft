<template>
    <div class="userProf">
        <div class="left">
            <div class="profile">
                <img class="profilePic" src="../assets/Profilepic.png" />
                <h2>Juan Dela Cruz</h2>
            </div>
            <div class="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="right">
            <div class="followingArtist">
                <h2>Following Artists</h2>
                <div class="container">
                    <div class="top-1">
                        <h3>Ben and Ben</h3>
                    </div>
                    <img class="class-image" src="../assets/benandben.png" />
                </div>
                
                <div class="container">
                    <div class="top-2">
                        <h3>Eraser Heads</h3>
                    </div>
                    <img class="class-image" src="../assets/hulingelbimbo.png" />
                </div>
                
                <div class="container">
                    <div class="top-3">
                        <h3>Joshua Garcia</h3>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="container">
                    <div class="top-4">
                        <h3>Autotelic</h3>
                    </div>
                    <img class="class-image" src="../assets/autotelic.jpg" />
                </div>

            </div>

            <div class="post">
                <h2>My Posts</h2>
                <div class="containr-1">
                    <div class="top-1">
                        <h3>Art 1</h3>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="containr-2">
                    <div class="top-2">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="containr-3">
                    <div class="top-3">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="containr-4">
                    <div class="top-4">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'user'
}
</script>

<style lang="scss" scoped>
    
    * {
        margin:0;
        padding:0;
    }

    .left{
        margin-top: 80px;
        position: absolute;
        height: 100%;
        top: 0;
        width: 20%;
        text-align: center;
        left:20px;
        .profile{
            padding:3px;
            
            .profilePic{
                border-radius: 100%;
                padding:20px 0 20px;
            }

        }
    }

    .right{
        top:0;
        margin-left: 25% ;
        div.followingArtist {
            position:relative;   
            overflow-x: scroll;
            white-space: nowrap;


            .container {
                display: inline-block;
                width: 27.33%;
                padding: 5px;

                img{
                    width: 300px;
                    height: 200px;
                    .class-image{
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
            }


        }



              
    }


    
</style>