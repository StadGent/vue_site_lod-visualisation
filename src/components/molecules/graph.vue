<template>
    <div class="highlight highlight--top highlight--inverted" aria-hidden="true">
        <network ref="network" style="height: 600px;" class="highlight__inner"
                 @nodes-update="selectCurrent" @select="navigate"
                 :nodes="nodes" :edges="edges" :options="options"
        ></network>
        <div class="graph-controls form-actions">
            <button class="button button-secondary button-small"
                    @click="selectPrevious"
                    :disabled="disablePrevious">
                Vorige
            </button>
            <button class="button button-secondary button-small push-right"
                    @click="selectNext"
                    :disabled="disableNext">
                Volgende
            </button>
            <button class="button button-secondary button-small"
                    @click="clearNodes"
                    :disabled="disableDelete">
                Wis alle nodes
            </button>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapMutations, mapState } from 'vuex'
  import { Network } from 'vue-vis-network/src/main'

  export default {
    name: 'graph',
    components: {network: Network},
    data () {
      return {
        pos: null,
        options: {
          interaction: {
            hover: true
          },
          edges: {
            chosen: false,
            font: {
              strokeWidth: 5
            }
          },
          nodes: {
            font: {
              strokeWidth: 5
            },
            widthConstraint: {maximum: 120},
            shape: 'dot',
            size: 16,
            color: {
              border: '#80bed9',
              background: '#E6F5FC',
              hover: {},
              highlight: {
                border: '#E1A400',
                background: '#fab600'
              }
            }
          },
          physics: {
            maxVelocity: 150,
            solver: 'repulsion',
            timestep: 0.35,
            stabilization: {iterations: 150}
          }
        }
      }
    },
    computed: {
      ...mapState([
        'visited',
        'nodes',
        'edges'
      ]),
      ...mapGetters([
        'last',
        'lastId',
        'getSetByIndex'
      ]),
      disablePrevious () {
        return this.pos < 1
      },
      disableNext () {
        return this.pos >= this.visited.length - 1
      },
      disableDelete () {
        return !this.visited.length
      }
    },
    methods: {
      ...mapMutations(['CLEAR_GRAPH']),
      navigate ({nodes}) {
        if (!nodes.length) {
          return
        }
        window.location.href = nodes[0].replace('.gent/id/', '.gent/data/')
      },
      clearNodes () {
        this.CLEAR_GRAPH()
        this.pos = 0
      },
      selectCurrent: function () {
        this.$refs.network.selectNodes([this.lastId])
      },
      selectPrevious () {
        let previous = this.getSetByIndex(--this.pos)?.id
        if (previous) {
          this.$refs.network.selectNodes([previous])
        }
      },
      selectNext () {
        let next = this.getSetByIndex(++this.pos)?.id
        if (next) {
          this.$refs.network.selectNodes([next])
        }
      }
    },
    mounted () {
      this.pos = this.visited.length
    }
  }
</script>

<style scoped>
    .graph-controls {
        padding-top: 1rem;
    }

    .push-right {
        margin-right: auto;
    }
</style>
