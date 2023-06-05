<template>
    <div>
        <p>书名：{{ book.name }}</p>
        <p>作者：{{ book.author }}</p>
        <p>页数：{{ book.pages }}</p>
        <p>
            人物：<span style="font-weight: 600;margin-right: 5px;" v-for="item in book.figure">{{ item }}</span>
        </p>
        <button @click="handleClick">增加书籍页数</button>
    </div>
</template>

<script>
import useBook from '@/hooks/useBook'

export default {
    name: 'ReactiveComp',
    setup() {
        return useBook()
    }
};
</script>

<style lang="scss" scoped></style>