<template>
    <div class="highlight highlight--top highlight--inverted">
            <network ref="network" style="height: 600px;" class="highlight__inner"
                     :nodes="myNodes" :edges="edges" :options="options"
                     @select="navigate"
            ></network>
    </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import { Network } from 'vue-vis-network'

  export default {
    name: 'graph',
    components: {network: Network},
    data () {
      return {
        options: {
          edges: {
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
            size: 16
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
        'lastId'
      ]),
      myNodes () {
        return this.nodes.map(node => {
            node.color = node.id === this.lastId ? '#fab600' : '#E6F5FC'
            return node
          }
        )
      }
    },
    methods: {
      navigate: function ({nodes}) {
        window.location.href = nodes[0].replace('.gent/id/', '.gent/data/')
      }
    }
  }
</script>

<style scoped>

</style>
