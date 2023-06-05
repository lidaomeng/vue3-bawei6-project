import { reactive, onBeforeMount, onMounted, onUpdated } from 'vue'

export default function () {
    // 通过reactive定义响应式数据（只能接收引用类型的数据）
    const book = reactive({
        name: '《三国演义》',
        author: '罗贯中',
        pages: 560,
        figure: ['刘备', '曹操', '孙权', '诸葛亮']
    })

    // 生命周期函数（setup方法中没有 beforeCreate created）
    onBeforeMount(() => {
        console.log('onBeforeMount...');
    })

    onMounted(() => {
        console.log('onMounted...');
    })

    onUpdated(() => {
        console.log('onUpdated...', book.pages);
    })

    const handleClick = () => {
        book.pages += 10
    }

    return {
        book,
        handleClick
    }
}