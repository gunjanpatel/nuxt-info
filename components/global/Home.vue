<template>
  <slot />
  <div class="grid place-content-top text-center h-full w-full text-xl lg:text-4xl min-h-[15em]">
    <slot name="shloka" />
    <div class="text-xs lg:text-xl">
      <slot name="shloka-meaning" />
    </div>
  </div>
</template>
<style>
#page-index-md {
  background-image: url("/img/background.jpg");
  background-repeat: no-repeat;
  .bg-gray-800 {
    background-color: transparent;
  }

  @media (max-width: 767px) {
    background-position-x: 8%;
  }
}
</style>
