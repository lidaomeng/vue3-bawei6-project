<template>
    <teleport to="body">
        <div class="mask__container">
            <div class="mask__content">
                加载中...
            </div>
        </div>
    </teleport>
</template>

<style lang="scss" scoped>
.mask__container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .6;
    color: #fff;

    .mask__content {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 24px;
    }
}
</style>