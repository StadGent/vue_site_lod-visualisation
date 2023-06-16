<template>
  <div class="highlight highlight--top highlight--inverted" aria-hidden="true">
     <v-network-graph ref="networkRef"
        class="highlight__inner"
        style="height: 600px;"
        :nodes="nodes"
        :edges="edges"
        v-model:selected-nodes="selectedNodes"
        :configs="configs"
        :event-handlers="eventHandlers"
      >
        <template #edge-label="{ edge, ...slotProps }">
          <v-edge-label :text="edge.label" align="center" vertical-align="above" v-bind="slotProps" style="max-width: 120px"/>
        </template>
     </v-network-graph>
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
import { ref, computed, watch, onMounted, toRaw } from 'vue';
import { VNetworkGraph, VEdgeLabel } from 'v-network-graph'
import { ForceLayout } from 'v-network-graph/lib/force-layout'
import { useStore } from 'vuex';

export default {
  name: 'graph',
  components: { 'v-network-graph': VNetworkGraph, 'v-edge-label': VEdgeLabel },
  setup() {
    const store = useStore();
    const networkRef = ref(null);
    const pos = ref(null);
    const selectedNodes = ref([null]);

    const eventHandlers = {};

    const configs = {
      view: {
         layoutHandler: new ForceLayout({
            positionFixedByDrag: false,
            positionFixedByClickWithAltKey: true,
            createSimulation: (d3, nodes, edges) => {
              const forceLink = d3.forceLink(edges).id(d => d.id)
              return d3
                .forceSimulation(nodes)
                .force('edge', forceLink.distance(200))
                .force('charge', d3.forceManyBody().strength(-2000))
                .force('collide',d3.forceCollide().radius(60).iterations(2))
                .force('center', d3.forceCenter())
                .alphaMin(0.001)
                .alpha(0.5)
                .on('end', () => {
                  networkRef.value.fitToContents();
                });
            }
          })
      },
      node: {
        selectable: true,
        normal: {
          strokeWidth: 1,
          type: 'circle',
          radius: 16,
          color: '#E6F5FC',
          strokeColor: '#80bed9'
        },
        selected: {
          strokeWidth: 1,
          type: 'circle',
          radius: 16,
          color: '#fab600',
          strokeColor: '#E1A400'
        },
        hover: {
          strokeWidth: 1,
          type: 'circle',
          radius: 16,
          color: '#8fd2f1',
          strokeColor: '#4aa2c9'
        },
        focusring: {
          visible: false
        },
        label: {
          visible: true,
          fontFamily: undefined,
          fontSize: 11,
          lineHeight: 1.1,
          color: '#000000',
          margin: 12,
          direction: 'south',
          directionAutoAdjustment: true,
          text: ( node ) => {
            var maxLength = 20;
            if (node.label.length < maxLength ) {
              return node.label;
            }
            var label = '';
            var currentLine = '';
            var words = node.label.split(' ');
            words.forEach((word) => {
              if ((currentLine + word).length > maxLength) {
                if (currentLine.includes(' ')) {
                  label += currentLine.trim() + '\n';
                  currentLine = '';
                }
              }

              currentLine += word + ' ';
              while (currentLine.length > maxLength ) {
                label += currentLine.slice(0, maxLength) + '\n';
                currentLine = currentLine.slice(maxLength);
              }
            });

            label += currentLine;

            return label.trim();
          }
        }
      },
      edge: {
        type: 'curve',
        normal: {
          color: '#80bed9',
        },
        hover: {
          color: '#4aa2c9'
        },
        marker: {
          target: {
            type: 'arrow'
          }
        },
        label: {
          visible: true,
          fontFamily: undefined,
          fontSize: 11,
          lineHeight: 1.1,
          color: '#000000',
          margin: 4,
          direction: 'south'
        }
      }
    };

    const visited = computed(() => store.state.visited);
    const nodes = computed(() => toRaw(store.state.nodes));
    const edges = computed(() => toRaw(store.state.edges));
    const lastId = computed(() => store.getters.lastId);
    const getSetByIndex = computed(() => store.getters.getSetByIndex);

    const disablePrevious = computed(() => pos.value < 1);
    const disableNext = computed(() => pos.value >= visited.value.length - 1);
    const disableDelete = computed(() => visited.value.length === 0);

    const navigate = ({ node }) => {
      var url = node;
      if (process.env.NODE_ENV === 'development') {
        url = node.replace(/((qa|dv)\.)?stad\.gent\/(id|data)\//, 'http://localhost:8080/');
      }
      window.location.href = '//' + url;
    };

    const clearNodes = () => {
      store.commit('CLEAR_GRAPH');
      pos.value = 0;
    };

    const selectCurrent = () => {
      selectedNodes.value = [lastId.value.replace(/http.?:\/\//, '')];
    };

    const selectPrevious = () => {
      const previous = getSetByIndex.value(--pos.value)?.id;
      if (previous) {
        selectedNodes.value = [previous.replace(/http.?:\/\//, '')];
      }
    };

    const selectNext = () => {
      const next = getSetByIndex.value(++pos.value)?.id;
      if (next) {
        selectedNodes.value = [next.replace(/http.?:\/\//, '')];
      }
    };
    watch(visited, () => {
      pos.value = visited.value.length;
    });

    onMounted(() => {
      pos.value = visited.value.length;
      selectCurrent();
    });

    eventHandlers['node:click'] = navigate;

    return {
      networkRef,
      configs,
      nodes,
      edges,
      disablePrevious,
      disableNext,
      disableDelete,
      selectCurrent,
      selectPrevious,
      selectNext,
      clearNodes,
      navigate,
      selectedNodes,
      eventHandlers
    };
  }
};
</script>

<style scoped>
.graph-controls {
  padding-top: 1rem;
}

.push-right {
  margin-right: auto;
}
</style>
