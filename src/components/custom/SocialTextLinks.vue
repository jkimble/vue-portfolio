<template>
    <div class="social-wrap">
        <span class="iconwrap">
            <slot name="icon"></slot>
        </span>
        <div class="social-content">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <slot></slot>
        </div>
    </div>
  </template>

<style scoped>

</style>