<template>
  <div id="app">
    <h4>子应用</h4>
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
import BpmnViewer from "bpmn-js/lib/Viewer";
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas'
import zoomScroll from './zoomScroll.js'
import xmlStr from './currentCanvasXml'
export default {
  name: 'App',
  data() {
    return {
      bpmnViewer: null
    }
  },
  mounted() {
      this.init();
  },
  methods: {
    init() {
        const canvas = this.$refs.canvas
        this.bpmnViewer = new BpmnViewer({container: canvas, additionalModules: [
            zoomScroll,
            MoveCanvasModule // 移动整个画布
        ]})
        this.createNewDiagram()
    },
    async createNewDiagram() {
        try {
            await this.bpmnViewer.importXML(xmlStr)
        } catch (err) {
            console.log(err.message, err.warnings)
        }
    }
  }
}
</script>

<style>
#app {
  border: 1px solid blue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.canvas {
  width: 100%;
  height: 500px
}
</style>
