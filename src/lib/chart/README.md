# 基于d3.js的柱状图vue插件
## 插件安装
### NPM
``` bash
npm i fanchart
```
### 引入插件
``` javascript
import Vue from 'vue'
import fanchart from 'fanchart.vue'
Vue.use(fanchart)
```
### 基本用法
``` 
<fanchart :dataset="dataset" :width="900" :height="600" />
```
### API
| 事件名 | 说明 | 参数 | 默认值 |
| - | - | - | - |
| dataset | 需要绘制的数据 | Array | [] |
| width | 绘制区的宽度 | Number | 400 |
| height | 绘制区的高度 | Number | 400 |

### demo 地址
<!-- 括号的逗号需要一个空格 -->
[demo演示页面](https://herofan.github.io/d3-vue/dist/index.html)