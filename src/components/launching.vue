<template>
    <div class="launch">
        <img src="@/assets/dots_1.png" alt="" class="dots_1">
        <img src="@/assets/stone_1.png" alt="" class="stone_1">
        <span class="launch-text">LAUNCHING SOON</span><br>
        <div class="launch-div1">
            <img src="@/assets/sln-coin.png" alt="" class="launch-coin">
            <h3>SILVERLINE TOKEN</h3><br>
        </div>
        <div class="launch-div2">
            <img src="@/assets/sl-token-coin.png" alt="" class="launch-coin">
            <h3>SILVERLINESWAP-DEX</h3><br>
        </div>
        <img src="@/assets/stone_1.png" alt="" class="stonel-1">
    </div>
</template>
<script lang="ts">
import { Options ,Vue} from "vue-class-component";

@Options({})
export default class Launching extends Vue{

}
</script>
<style>
.stonel-1{
    position:relative;
width: 84.03px;
height: 86.32px;
right: 3%;
top: 179.58px;
}
.stone_1{
    position: absolute;
width: 84.03px;
height: 86.32px;
left: 5%;
top: 300.58px;

}
.launch-div2{
    border-width: 2px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
position: static;
width: 401.39px;
height: 376.94px;
display: inline-block;
margin-top: 000px;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%);
border-radius: 15.2778px;
}
.launch-coin{
    margin-top: 30px;
    width: 70%;
}
.launch{
    position: static;
    margin-top: 150px;
}
.launch-text{
    position: static;


/* top: 1199.31px; */

font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 26.7361px;
line-height: 40px;
text-transform: uppercase;
color: #FFFFFF;
}.launch-div1{
   
position: static;
width: 401.39px;
height: 376.94px;
border-width: 2px;
margin: 100px;
  border-style: solid;
  border-color:
rgba(142, 0, 255, 0.5);
display: inline-block;
vertical-align: -25px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(142, 0, 255, 0.15) 137.15%);
border-radius: 15.2778px;
}
@media screen and (max-width: 800px){
    .stone_1{
        display: none;
    }
    .stonel-1{
        display: none;
    }.launch-div1{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        vertical-align: 0;

    }.launch-div2{
        margin-top: 50px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>