<template>
    <div class = 'layout'>
        <div class = 'calendar'>
        <div id = 'plugin'>
        <vc-calendar is-expanded
        :value="null"
        />
        </div>
        </div>
        <div class = 'eventBanners'>
        <ul>
        <li>
        <img id='event1' src = "https://images.unsplash.com/photo-1542749777-399a1d3e59de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80">
        </li>
        <li>
        <img id='event2' src = "https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80">
        </li>
        </ul>
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
        float:left;
        padding-left:50px;
    };
}

.eventBanners {
  #event1{
    float:right;
    padding: right 70px;
    display: block;
    overflow: hidden;
    height: 200px;
    width: 500px;   
  }
  #event2{
    float:right;
    padding: right 70px;
    display: block;
    overflow: hidden;
    height: 200px;
    width: 500px;   
  }
}

</style>