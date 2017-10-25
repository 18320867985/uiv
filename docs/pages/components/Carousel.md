# Carousel

> A slideshow component for cycling through elements, like a carousel. **Nested carousels are not supported**.

## Example

```html
<template>
  <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">
    <slide v-for="(slide, index) in slides" :key="index">
      <div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0? '#99a9bf' : '#d3dce6'}"></div>
      <div class="carousel-caption">
        <h3>This is {{slide.title}}</h3>
      </div>
    </slide>
  </carousel>
  <br/>
  <form class="form-inline">
    <button type="button" class="btn btn-default" @click="indicators=!indicators">Toggle Indicators</button>
    <button type="button" class="btn btn-default" @click="controls=!controls">Toggle Controls</button>
    <button type="button" class="btn btn-default" @click="pushSlide">Push Slide</button>
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon">Interval</span>
        <input type="number" class="form-control" step="1" min="0" v-model.number="interval" style="width: 100px">
        <span class="input-group-addon">ms</span>
      </div>
    </div>
  </form>
</template>
<script>
  export default {
    data () {
      return {
        interval: 2000,
        indicators: true,
        controls: true,
        slides: [
          {title: 'Slide 1'},
          {title: 'Slide 2'},
          {title: 'Slide 3'},
          {title: 'Slide 4'}
        ]
      }
    },
    methods: {
      pushSlide () {
        this.slides.push({title: `Slide ${this.slides.length + 1}`})
      }
    }
  }
</script>
<!-- carousel-example.vue -->
```

## Override Indicators

Use the `indicators` slot to override default Bootstrap indicators. 

This is a scoped slot, use `slot-scope="props"` in Vue 2.5+, otherwise `scope="props"`.

```html
<template>
  <carousel>
    <slide v-for="(slide, index) in slides" :key="index">
      <div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0 ? '#99a9bf' : '#d3dce6'}"></div>
      <div class="carousel-caption">
        <h3>This is {{slide.title}}</h3>
      </div>
    </slide>
    <!-- Use this slot for custom indicators -->
    <template slot="indicators" slot-scope="props">
      <ol class="carousel-indicators custom-carousel-indicators">
        <li v-for="(slide, index) in slides"
            :class="{active:index === props.activeIndex}"
            @click="props.select(index)">
            <!-- Anything you like here -->
        </li>
      </ol>
    </template>
  </carousel>
</template>
<script>
  export default {
    data () {
      return {
        slides: [
          {title: 'Slide 1'},
          {title: 'Slide 2'},
          {title: 'Slide 3'},
          {title: 'Slide 4'}
        ]
      }
    }
  }
</script>
<style>
  .custom-carousel-indicators li, .custom-carousel-indicators li.active {
    width: 50px;
    height: 8px;
    margin: 0 3px;
    border-radius: 0;
  }
</style>
<!-- carousel-override-indicators.vue -->
```

# API Reference

## [Carousel.vue](https://github.com/wxsms/uiv/tree/master/src/components/carousel/Carousel.vue)


<div class="table-responsive">
  <table class="table table-bordered">
    <tbody>
    <tr>
      <td colspan="5"><span class="label label-default">Props</span></td>
    </tr>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th width="50px">Required</th>
      <th>Description</th>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>v-model</code></td>
      <td>Number</td>
      <td></td>
      <td></td>
      <td>The current slide index, use this to manual change slide index.</td>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>indicators</code></td>
      <td>Boolean</td>
      <td>true</td>
      <td></td>
      <td>Show / hide the indicators.</td>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>controls</code></td>
      <td>Boolean</td>
      <td>true</td>
      <td></td>
      <td>Show / hide the controls.</td>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>interval</code></td>
      <td>Number</td>
      <td>2000</td>
      <td></td>
      <td>Slides running interval time.</td>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>icon-control-left</code></td>
      <td>String</td>
      <td>glyphicon glyphicon-chevron-left</td>
      <td></td>
      <td>The left control icon font class.</td>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>icon-control-right</code></td>
      <td>String</td>
      <td>glyphicon glyphicon-chevron-right</td>
      <td></td>
      <td>The right control icon font class.</td>
    </tr>
    </tbody>
    <tbody>
    <tr>
      <td colspan="5"><span class="label label-default">Slots</span></td>
    </tr>
    <tr>
      <th>Name</th>
      <th colspan="4">Description</th>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>indicators</code></td>
      <td colspan="4">Override indicators. This is a scoped slot with <code>activeIndex</code> prop and <code>select</code> method. See example section above for usage details.</td>
    </tr>
    </tbody>
    <tbody>
    <tr>
      <td colspan="5"><span class="label label-default">Events</span></td>
    </tr>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th colspan="3">Description</th>
    </tr>
    <tr>
      <td nowrap="nowrap"><code>change</code></td>
      <td><p>index</p></td>
      <td colspan="3">Fire after slide changed, with the index number changed to.</td>
    </tr>
    </tbody>
  </table>
</div>
