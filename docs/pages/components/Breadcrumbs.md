# Breadcrumbs

> Indicate the current page's location within a navigational hierarchy.

## Example

Use `items` array to create a breadcrumbs nav. `active` state of last element is automatically set if it is undefined.

```html
<template>
  <breadcrumbs :items="items"/>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {text: 'Home', href: '#'},
          {text: 'Library', href: '#'},
          {text: 'Data', href: '#'}
        ]
      }
    }
  }
</script>
<!-- breadcrumbs-example.vue -->
```


## Breadcrumb Item

You can also use `<breadcrumb-item>` in breadcrumbs directly. This is useful while full control of item text is need (e.g. HTML tags).

Note that `active` state will not automatically set if using this mode.

```html
<breadcrumbs>
  <breadcrumb-item href="#"><b>Home</b></breadcrumb-item>
  <breadcrumb-item href="#">Library</breadcrumb-item>
  <breadcrumb-item :active="true">Data</breadcrumb-item>
</breadcrumbs>
<!-- breadcrumbs-item.vue -->
```

## Router Link

Parse `to` (String or Object) instead of `href` will create a `router-link` for the breadcrumb item, which you can use with [Vue-Router](https://router.vuejs.org/).

```html
<template>
  <breadcrumbs :items="items"/>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {text: 'Home', to: '/', exact: true},
          {text: 'Breadcrumbs', to: '/breadcrumbs'}
        ]
      }
    }
  }
</script>
<!-- breadcrumbs-router-link.vue -->
```

# API Reference

## [Breadcrumbs.vue](https://github.com/wxsms/uiv/tree/master/src/components/breadcrumbs/Breadcrumbs.vue)

### Props

Name             | Type       | Default  | Required | Description
---------------- | ---------- | -------- | -------- | -----------------------
`items`          | Array      |          |          | Breadcrumb items to create. Props defined in each item object is the same with BreadcrumbItem.vue, except `text` will be replace as the breadcrumb item body.

### Slots

Name      | Description
--------- | -----------------------
`default` | The breadcrumbs body.

## [BreadcrumbItem.vue](https://github.com/wxsms/uiv/tree/master/src/components/breadcrumbs/BreadcrumbItem.vue)

### Props

Name             | Type             | Default  | Required | Description
---------------- | ----------       | -------- | -------- | -----------------------
`acive`          | Boolean          | false    |          | Set item to active state.
`href`           | String           |          |          | An native link will be created if this prop present.
`target`         | String           | _self    |          | Native link prop.
`to`             | String or Object |          |          | An Vue-Router link will be created if this prop present.
`replace`        | Boolean          | false    |          | Vue-Router link prop.
`append`         | Boolean          | false    |          | Vue-Router link prop.
`exact`          | Boolean          | false    |          | Vue-Router link prop.

### Slots

Name      | Description
--------- | -----------------------
`default` | The breadcrumb item body.
