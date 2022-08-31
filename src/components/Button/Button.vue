<template>
  <button :class="variant" class="button">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
// import StyledButton from './Button-styles'

type Variant = 'primary'|'info'|'success'|'error'|'warning'

interface Props {
  text: string
  variant?: Variant
}

withDefaults(defineProps<Props>(), {
  text: 'Hello',
  variant: 'primary'
})
</script>

<styles lang="scss">
  .button {
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    cursor: pointer;
    border-radius: 3px;
  
    &.primary {
      background: palevioletred;
      color: white;
    }

    &.secundary {
      background: white;
      color: palevioletred;
    }

    &.terciary {
      background: green;
      color: black;
    }
  }
</styles>