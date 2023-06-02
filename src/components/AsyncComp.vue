<script>
import { defineAsyncComponent } from 'vue'

import HelloWorld from './HelloWorld.vue'

// 定义异步组件
const AsyncComp = defineAsyncComponent(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(HelloWorld)
        }, 3000);
    })
})

export default AsyncComp
</script>
