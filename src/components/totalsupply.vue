<template>
    <div class="total-supply">
        <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/Vector_1.png" alt="" class="vector_1">
         <img src="@/assets/Vector_4.png" alt="" class="vector_4">
         
        <span class="total-supply-text">total supply</span>
        <div class="token-supply-div">
            <img src="@/assets/tokensupply.png" alt="" width="100%">
        </div>
        <span class="total-distribution-text">token distribution</span>
         <div class="token-supply-div2">
             <img src="@/assets/tokendistribution.png" alt="" width="100%">
        </div>
        <img src="@/assets/Vector_2.png" alt="" class="vector2-totalsupply" />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Totalsupply extends Vue {}
</script>
<style>
.vector2-totalsupply{
    
    position: relative;
    top: -250px;
    left: -1%;
    right: 1%;
    width: 100%;
    opacity: 0.3;
}
.token-supply-div2{
    position: relative;
width: 470.9px;
height: 374.65px;
left: 55%;
top: -267.57px;

border-radius: 15.2778px;

}
.total-distribution-text{
    position: relative;
    width: 287.22px;
height: 27.5px;
left: 20%;
top:-343px;

font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
}
.total-supply{
    position: static;
  
}
.token-supply-div{
    position: relative;
width: 501.46px;
height: 374.65px;
left: 12%;

top: 150.57px;

border-radius: 15.2778px;
}
.total-supply-text{
    position: relative;
width: 203.19px;
height: 27.5px;
right: 20%;
top: 71.04px;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
}
@media screen and (max-width: 800px){
    .total-supply-text{
        position: static;
        margin-top: 50px;

    }.total-distribution-text{
        position: static;
         margin-top: 50px;
    }.token-supply-div{
        position: static;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        margin-bottom: 50px;
        width: 80%;
    }.token-supply-div2{
        position: static;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        margin-bottom: 200px;
        width: 80%;
    }
}
</style>