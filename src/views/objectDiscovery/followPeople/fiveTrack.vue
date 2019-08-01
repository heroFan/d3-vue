<template>
  <div>
    <Tablecomponent>
      <div slot="searchCriteria">111111</div>
      <div slot="tableBody">
        <el-table
          v-loading="listLoading"
          :data="list"
          height="650"
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
        >
          <el-table-column
            v-for="(item, index) in tableDes"
            :key="index"
            align="center"
            :label="item.label"
            :width="item.width"
          >
            <template slot-scope="scope">
              {{ scope.row[item.field] }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </Tablecomponent>
  </div>
  <!-- <el-table
      v-loading="listLoading"
      :data="list"
      height="650"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="照片" width="125">
        <template slot-scope="scope">
          {{ scope.row.photo }}
        </template>
      </el-table-column>
      <el-table-column label="sk系数" align="center">
        <template slot-scope="scope">
          {{ scope.row.anomaly }}
        </template>
      </el-table-column>
      <el-table-column label="预警次数" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.warnTimes }}</span>
        </template>
      </el-table-column>
      <el-table-column label="预警日期" width="160" align="center">
        <template slot-scope="scope">
          {{ scope.row.warnTime }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="基本信息" width="460" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="行踪轨迹" width="425">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="核查状态" align="center">
        <template slot-scope="scope">
          {{ scope.row.checkStatus }}
        </template>
      </el-table-column>
    </el-table> -->
</template>

<script>
import { getTableList } from '@/api/table'
import Tablecomponent from '@/components/table/index.vue'

export default {
  components: {
    Tablecomponent
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      tableDes: [
        {
          label: '照片',
          field: 'photo',
          width: '125px'
        },
        {
          label: 'sk系数',
          field: 'anomaly',
          width: ''
        },
        {
          label: '预警次数',
          field: 'warnTimes',
          width: ''
        },
        {
          label: '预警日期',
          field: 'warnTime',
          width: '160px'
        },
        {
          label: '基本信息',
          field: 'warnTime',
          width: '460px'
        },
        {
          label: '预警日期',
          field: 'warnTime'
        },
        {
          label: '核查状态',
          field: 'checkStatus'
        }
      ]
    }
  },

  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getTableList().then(response => {
        this.list = response.object.data
        this.listLoading = false
      })
    }
  }
}
</script>
