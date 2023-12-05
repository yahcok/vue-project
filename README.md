## vue3中＜script setup＞ 和 setup函数的区别

使用setup函数
```javascript
<script>
import { ref } from 'vue'
export default {
  name: 'Home',
  setup () {
    const num = ref(1)
    return { num }
  }
}
</script>
```

使用 <script setup>
```javascript
<script setup>
import { ref } from 'vue'
const num = ref(1)
</script>
```

