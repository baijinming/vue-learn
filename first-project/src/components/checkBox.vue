<template>
    <div :class="size">
      <div class="checkbox" :class="choose ? 'choose' : ''"  @click="toggle">
        <div :class="choose ? 'gou' : ''"></div>
      </div>
    </div>
</template>

<script>
    export default {
      props: {
        ttt: {
          type: String
        }
      },
      data() {
        return {
          choose: false,
          ggg: this.ttt
        }
      },
      methods: {
        toggle() {
          this.choose = !this.choose
        }
      },
      computed: {
        size() {
          switch (this.ggg) {
            case 'min':
              return 'min';
              break;
            case 'max':
              return 'max';
              break;
            default:
              break;
          }
        }
      }
    }
</script>

<style scoped>
  .checkbox {
    width: 100%;
    height: 100%;
    margin: 50px;
    border-radius: 4px;
    border: 1px solid #c9c9c9;
    background-color: #fff;
  }

  .choose {
    background-color: skyblue;
  }

  .gou {
    position: relative;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 8px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotateZ(-45deg);
  }

  .max {
    width: 20px;
    height: 20px;
    transform: scale(2,2);
  }
</style>
