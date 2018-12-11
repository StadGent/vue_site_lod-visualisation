<template>
    <dl class="dataset">
        <template v-for="(key,index) in sortKeys(Object.keys(resource))">
            <dt :key="`dt-${index}`">
                <span v-if="isSubject(resource[key][0].o)">Is predicate <abbr :title="getPredicate(key)">{{key}}</abbr> of</span>
                <span v-else>Has predicate <abbr :title="getPredicate(key)">{{key}}</abbr></span>
                <div aria-hidden="true" class="predicate">{{getPredicate(key)}}</div>
            </dt>
            <dd :key="`dd-${index}`">
                <ul v-if="resource[key].length > 1">
                    <li v-for="(triple, index) in resource[key]" :key="`${key}-${index}`">
                        <a class="uri" v-if="isUri(triple.o)"
                           :href="isSubject(triple.o) ? triple.s.value : triple.o.value">
                            {{isSubject(triple.o) ? triple.s.value : triple.o.value}}
                        </a>
                        <span v-else>{{isSubject(triple.o) ? triple.s.value : triple.o.value}}</span>
                    </li>
                </ul>
                <div v-else v-for="(triple, index) in resource[key]" :key="`${key}-${index}`">
                    <a class="uri" v-if="isUri(triple.o)"
                       :href="isSubject(triple.o) ? triple.s.value : triple.o.value">
                        {{isSubject(triple.o) ? triple.s.value : triple.o.value}}
                    </a>
                    <span v-else>{{isSubject(triple.o) ? triple.s.value : triple.o.value}}</span>
                </div>
            </dd>
        </template>
    </dl>
</template>

<script>
  export default {
    props: {
      resource: {
        type: Object
      },
      id: {
        type: String
      }
    },
    methods: {
      sortKeys (keys) {
        return keys.sort((a, b) => {
          if (a > b) {
            return 1
          }
          if (b > a) {
            return -1
          }
          return 0
        })
      },
      isSubject(object) {
        return object.value === `https://qa.stad.gent/id${this.id}` || object.value === `http://qa.stad.gent/id${this.id}`
      },
      isUri(object) {
       return object.type === 'uri'
      },
      getPredicate(key) {
        return this.resource[key][0].p.value
      }
    }
  }
</script>