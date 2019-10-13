<!--
 * @Description: communicate
 * @Author:jxf
 * @Date: 2019-10-10 10:30:46
 * @LastEditTime: 2019-10-10 11:32:00
 * @LastEditors: Please set LastEditors
 -->
 <template>
     <div>
        <div>{{msg}}</div>

        <!-- <p>
            <slot name="content" :xx="xx"></slot>
        </p> -->
     </div>
</template>
<script>
  export default {
    name: "child",
    props:{
        msg:String
    },
    data(){
        return{
        }
    }
  }

</script>
<style></style>
