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
                           :href="getDataUri(triple)">
                            {{getUri(triple)}}
                        </a>
                        <div v-else v-html="getMarkdown(triple)"></div>
                    </li>
                </ul>
                <template v-else v-for="(triple, index) in resource[key]">
                    <a class="uri" v-if="isUri(triple.o)" :key="`${key}-${index}`"
                       :href="getDataUri(triple)">
                        {{getUri(triple)}}
                    </a>
                    <code v-else-if="isHTML(triple)" v-text="getValue(triple)" :key="`${key}-${index}`"></code>
                    <div v-else v-html="getMarkdown(triple)" :key="`${key}-${index}`"></div>
                </template>
            </dd>
        </template>
    </dl>
</template>

<script>
  import * as markdown from 'markdown'

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
        return object.value === `https://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${this.id}`
          || object.value === `http://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${this.id}`
      },
      isUri(object) {
       return object.type === 'uri'
      },
      isHTML (triple) {
        let value = this.getValue(triple).trim()
        return /^<.+>$/gms.test(value)
      },
      getUri(triple) {
        return this.isSubject(triple.o) ? triple.s.value : triple.o.value
      },
      getValue(triple) {
        return (this.isSubject(triple.o) ? triple.s.value : triple.o.value) + ''
      },
      getDataUri(triple) {
        if (process.env.NODE_ENV === 'development') {
          return this.getUri(triple).replace(/http.?:\/\/stad.gent\/(id|data)\//, 'http://localhost:8080/');
        }
        return this.getUri(triple).replace('.gent/id/', '.gent/data/')
      },
      getMarkdown(triple) {
        let value = (this.isSubject(triple.o) ? triple.s.value : triple.o.value) + ''
        return markdown.parse(value);
      },
      getPredicate(key) {
        return this.resource[key][0].p.value
      }
    }
  }
</script>
