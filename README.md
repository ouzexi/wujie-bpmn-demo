分别使用 谷歌浏览器 / 火狐浏览器

在wujie中引入bpmn-js，存在4种情况：

1、在谷歌浏览器中，主应用中嵌入的子应用中的bpmn流程图正常显示；

![](C:\Users\Lenovo\AppData\Roaming\marktext\images\2024-04-10-15-47-15-image.png)2、在火狐浏览器中，主应用中嵌入的子应用中的bpmn流程图不显示；

![](C:\Users\Lenovo\AppData\Roaming\marktext\images\2024-04-10-15-48-06-image.png)3、在谷歌浏览器中，独立访问子应用中的bpmn流程图正常显示；

![](C:\Users\Lenovo\AppData\Roaming\marktext\images\2024-04-10-15-47-55-image.png)4、在火狐浏览器中，独立访问子应用中的bpmn流程图正常显示；

![](C:\Users\Lenovo\AppData\Roaming\marktext\images\2024-04-10-15-46-36-image.png)

5、在谷歌浏览器控制台中，主应用中嵌入的子应用中的bpmn流程图节点正常插入到dom

![](C:\Users\Lenovo\AppData\Roaming\marktext\images\2024-04-10-15-50-26-image.png)

6、在火狐浏览器控制台中，主应用中嵌入的子应用中的bpmn流程图节点没有插入到dom

![](C:\Users\Lenovo\AppData\Roaming\marktext\images\2024-04-10-15-52-02-image.png)

猜测：shadowRoot在不同浏览器特性不同？导致在火狐浏览器找不到节点插入？