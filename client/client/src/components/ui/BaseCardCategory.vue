<template>
    <div class="categorys">
        <slot></slot>
    </div>
</template>

<style scoped>
.categorys {
    display: grid;
    grid-auto-flow: column;
    
    border: 2px;
    border-color: brown;
}
</style>