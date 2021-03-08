<template>
  <button
    class="pn-button"
    :class="classes"
    :type="nativeType"
    :disabled="buttonDisabled || loading"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-else-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { toRefs, inject, computed, defineComponent, PropType, Ref } from 'vue'

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

export type ButtonSize = 'large' | 'medium' | 'small' | 'mini'

export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

export default defineComponent({
  name: 'pnButton',
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      default: ''
    },
    type: {
      type: String as PropType<ButtonType>
    },
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: 'button'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String
  },

  setup(props) {
    const { size, disabled } = toRefs(props)
    const buttonSize = useButtonSize(size)
    const buttonDisabled = useButtonDisabled(disabled)
    const classes = useClasses({
      props,
      size: buttonSize,
      disabled: buttonDisabled
    })
    return {
      buttonDisabled,
      classes
    }
  }
})

const useClasses = ({ props, size, disabled }) => {
  return computed(() => {
    return [
      size.value ? `pn-button--${size.value}` : '',
      props.type ? `pn-button--${props.type}` : '',
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-loading': props.loading,
        'is-disabled': disabled.value
      }
    ]
  })
}

const useButtonDisabled = (disabled: Ref) => {
  return computed(() => {
    return disabled?.value
    // || elForm?.disabled
  })
}

const useButtonSize = (size: Ref) => {
  // const globalConfig = useGlobalOptions()
  return computed(() => {
    // const elFormItem = inject('elFormItem', null)
    return size?.value
    // || elFormItem?.elFormItemSize || globalConfig.size
  })
}
</script>
