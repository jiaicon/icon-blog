<template>
  <van-config-provider :theme-vars="themeVars">
    <div ref="van-tabs-container">
      <van-sticky :container="container">
        <van-tabs
            v-model:active="active"
            class="JNav"
            :swipeable="true"
            @change="onChange"
            :container="container"
        >
          <van-tab
              v-for="item in tabs"
              :key="item.category_id"
              :title="item.category_name"
              :to="item.source_key"
              class="tab-list-content"
          />
        </van-tabs>
      </van-sticky>
    </div>
  </van-config-provider>
</template>

<script>
import {Tab, Tabs, Sticky} from 'vant';
import {ref} from "vue";
import { useRoute } from 'vue-router';

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Sticky.name]: Sticky,
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          category_name: '综合',
          category_id: 1,
          source_key: "recommended"
        },
        {
          category_name: '后端',
          category_id: 4,
          source_key: "backend"
        },
        {
          category_name: '前端',
          category_id: 5,
          source_key: "frontend"
        },
      ]
    }
  },
  setup: () => {
    const themeVars = {
      tabsBottomBarColor: '#1e80ff'
    };
    const container = ref(null);
    return {
      themeVars,
      container,
    };
  },
  mounted() {
    const route = useRoute();
    this.tabs.forEach((item, index) => {
      if (route.path.indexOf(item.source_key) > 0) {
        this.active = index;
        this.$emit('getContainerList', item)
      }
    })
  },
  methods: {
    onChange() {
      this.$emit('getContainerList', this.tabs.find((item, index) => index === this.active))
    }
  }
}
</script>

<style>
.tab-list-content {
  margin-top: 10px;
}
</style>
