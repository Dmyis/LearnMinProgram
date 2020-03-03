// components/my-sel/my-sel.js
Component({
  properties: {

  },
  data: {
    counter:0
  },
  methods: {
    Increment(num) {
      this.setData({
        counter:this.data.counter + num
      })
    }
  }
})
