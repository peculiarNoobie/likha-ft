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
                
                <div class="container-1">
                    <div class="top-1">
                        <h2>Ben and Ben</h2>
                    </div>
                    <img class="class-image" src="../assets/benandben.png" />
                </div>
                
                <div class="container-2">
                    <div class="top-2">
                        <h2>Ang Huling El Bimbo</h2>
                        <p>Popular</p>
                    </div>
                    <img class="class-image" src="../assets/hulingelbimbo.png" />
                </div>
                
                <div class="container-3">
                    <div class="top-3">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

            </div>

            <div class="post">
                
                <div class="containr-1">
                    <div class="top-1">
                        <h2>Art 1</h2>
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
        position: fixed;
        height: 100%;
        z-index: 1;
        top: 0;
        width: 25%;
        left: 0;
        background-color: #fbf9fa;
    }
</style>