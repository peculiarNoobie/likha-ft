<template>
    <div class = 'layout'>
        <div class = 'calendar'>
        <div id = 'plugin'>
        <vc-calendar is-expanded/>
        </div>
        </div> 
        <div class = 'images'>
        <div class="container">
                <div class="side-1">
                </div> 
                <img class='event' src = "..\assets\benandben.png">
        </div>
        <div class="container">
                <div class="side-2">
                    <h2>Nov. 29, 11pm</h2>
                    <p>Mars Ravelo</p>
                </div> 
                <img class='event' src = "..\assets\mars-ravelo.jpg">
        </div>
        <div class="container">
                <div class="side-3">
                    <h2>Nov. 29, 11pm</h2>
                    <p>Huling El Bimbo</p>
                </div> 
                <img class='event' src = "..\assets\hulingelbimbo.png">
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'calendar'
}

</script>

<style lang="scss" scoped>
.calendar {
    #plugin{
        height: 700px;
        width: 700px;
        float:left;
        padding-left:50px;
    };
}

.images{
  h2{
    background: none;
    color: white;
    margin-bottom: 10px;
                }
    p{
    background: none;
    color: white;
    width: 60%;
    margin-bottom: 30px;
    }
    .container{
        .side-1{
      position:absolute;
        }
  .side-2{
      position:absolute;
  }
  .side-3{
      position:absolute;
  }
  .event{
    object-fit: fill;
    float:left;
    padding: right 70px;
    display: block;
    overflow: hidden;
    height: 200px;
    width: 500px;   
  }
    }
}

</style>